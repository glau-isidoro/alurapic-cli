import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
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
                ]
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