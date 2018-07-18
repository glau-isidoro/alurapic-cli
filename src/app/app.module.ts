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
import { CoreModule } from './core/core.module';
import { UserService } from './core/user/user.service';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpService } from './home/signup/signup.service';
import { UserNotTakenValidatorService } from './home/signup/user-not-taken.validator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    AppRoutingModule,
    HomeModule,
    CoreModule
  ],
  providers: [
    PhotoService,
    PhotoListResolver,
    AuthService,
    PlatformDetectorService,
    TokenService,
    UserService,
    AuthGuard,
    SignUpService,
    UserNotTakenValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
