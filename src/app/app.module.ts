import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { PhotoService } from './photos/photo/photo.service';
import { AppRoutingModule } from './/app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { HomeModule } from './home/home.module';
import { AuthService } from './core/auth/auth.service';
import { PlatformDetectorService } from './core/platform-detector/platform-detector.service';
import { TokenService } from './core/token/token.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    PhotoService,
    PhotoListResolver,
    AuthService,
    PlatformDetectorService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
