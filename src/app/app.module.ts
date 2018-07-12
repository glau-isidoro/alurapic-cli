import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { PhotoService } from './photos/photo/photo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule
  ],
  providers: [ PhotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
