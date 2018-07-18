import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './/app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { AuthService } from './core/auth/auth.service';
import { PlatformDetectorService } from './core/platform-detector/platform-detector.service';
import { TokenService } from './core/token/token.service';
import { CoreModule } from './core/core.module';
import { UserService } from './core/user/user.service';
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    PlatformDetectorService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
