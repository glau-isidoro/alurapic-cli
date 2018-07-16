import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
    //esse componente não vai ser carregado em outros componentes, podemos omitir o selector.
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;
//  para pegar referencia de um elemento do dom e poder manipula-lo.
//  Referencia #userNameInput no template 
    @ViewChild('userNameInput') userNameInput: ElementRef;
//  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['user', userName]),
//outro jeito   () => this.router.navigateByUrl('user/' + userName),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    //  autofocus caso o login falhe.  
                    this.userNameInput.nativeElement.focus();
                    alert('invalid username or password');
                }

            );
    }
}