import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoService } from './photo/photo.service';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';


@NgModule({
    declarations: [ 
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription
    ],
    exports: [ PhotoListComponent ],
    imports: [ 
        HttpClientModule,
        CommonModule,
    ],
    providers: [ PhotoService ]
})
export class PhotosModule {}