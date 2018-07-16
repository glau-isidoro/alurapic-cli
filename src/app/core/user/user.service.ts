import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'
import { Observable } from 'rxjs/Observable';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable()
export class UserService {

//  Desse jeito o header não recebe o subject quando recarrega a página
//  private userSubject = new Subject<User>(); 
//  Com BehaviorSubject o header recebe user no subscribe quando recarrega.
    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }
}