import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoService } from './photo/photo.service';
import { PhotoFormComponent } from './photo-form/photo-form.component';


@NgModule({
    declarations: [ 
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent
    ],
    exports: [ PhotoListComponent ],
    imports: [ 
        HttpClientModule,
        CommonModule,
    ],
    providers: [ PhotoService ]
})
export class PhotosModule {}