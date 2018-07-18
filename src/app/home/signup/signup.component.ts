import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidator: UserNotTakenValidatorService
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
    }
}