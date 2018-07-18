import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { UserService } from './user/user.service';
import { TokenService } from './token/token.service';

@NgModule({
    declarations: [ HeaderComponent ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ HeaderComponent ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        UserService,
        TokenService
    ]
})
export class CoreModule {}