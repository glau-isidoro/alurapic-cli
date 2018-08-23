import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

const API = 'http://localhost:3000'

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const pageNumber = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(`${API}/${userName}/photos`, { params: pageNumber });
    //se o nome de pageNumber fosse params, poderiamos omitir o params: e passar só { params }
    //pode fazer assim quando o nome do parametro é o mesmo nome da variável
  }

  upload(description: string, allowComments: boolean, photo: File) {
    const formData = new FormData()
    formData.append('description', description)
    formData.append('allowComments', allowComments ? 'true' : 'false')
    formData.append('imageFile', photo)
    return this.http.post(API + '/photos/upload', formData)
  }
}