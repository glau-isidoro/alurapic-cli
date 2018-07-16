import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // Quando é observable, boa prática finalizar o nome com $
    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }
}