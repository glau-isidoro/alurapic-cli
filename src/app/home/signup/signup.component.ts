import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidator: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformService: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            // primeiro parametro é o valor padrão
            // segundo parametro é o array com as validações síncronas
            // terceiro parametro são as validações assíncronas (ex: username taken validator)
            email: ['',
                [
                    Validators.required,
                    Validators.email,
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
//                  Validators.pattern(/^[a-z0-9_\-]+$/),
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(20)
                ],
                this.userNotTakenValidator.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(15)
                ]
            ]
        })
        this.platformService.isPlatformBrowser() &&
                        this.emailInput.nativeElement.focus();
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signUp(newUser)
            .subscribe(() =>
            this.router.navigate([''])
        );
    }
}