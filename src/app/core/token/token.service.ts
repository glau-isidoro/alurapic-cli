import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable()
export class TokenService {
    hasToken(): boolean {
//Os !! convertem a string em boolean.
//O primeiro, se a string existir converte para false, e o segundo converte para true.
//E o inverso se a string não existir.
        return !!this.getToken();
    }

    setToken(token): void {
        //armazena o token no navegador
        window.localStorage.setItem(KEY, token);
    }

    getToken(): string {
        return window.localStorage.getItem(KEY);
    }

    removeToken(): void {
        window.localStorage.removeItem(KEY);
    }
}