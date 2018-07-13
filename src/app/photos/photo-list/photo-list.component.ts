import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor( private activatedRoute: ActivatedRoute ) {}
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  //para garantir que o debounce não vai ficar alocando memória
  //quando o componente não estiver mais sendo usado.
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
