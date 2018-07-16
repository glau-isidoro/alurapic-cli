import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // Quando é observable, boa prática finalizar o nome com $
    user$: Observable<User>;

    constructor(private userService: UserService, private router: Router) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}