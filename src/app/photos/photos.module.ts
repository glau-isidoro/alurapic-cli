import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { PhotoService } from './photo/photo.service';

@NgModule({
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule
    ],
    providers: [
        PhotoService,
        PhotoListResolver
    ]
})
export class PhotosModule { }