import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []
  filter: string = '';
  
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService
  ) {}
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.service
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(newPhotos => {
        //this.photos.push(...newPhotos); não funciona pois o angular não detecta que o array mudou.
        //(...newPhotos) faz push de cada item do array newPhotos para o array this.photos
        this.photos = this.photos.concat(newPhotos); //assim o angular detecta a mudança
        this.filter = '';
        if(!newPhotos.length) this.hasMore = false;
      });
  }
}
