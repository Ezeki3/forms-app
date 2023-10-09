import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
// import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validators/validator';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this._validatorsService.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this._validatorsService.emailPattern)] ],
    username: ['', [Validators.required, this._validatorsService.cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  })

  constructor(
    private fb:FormBuilder,
    private _validatorsService:ValidatorsService,

  ) { }

  ngOnInit(): void {
  }

  isValidField( field: string){
    return this._validatorsService.isValidField( this.myForm, field )
  }

  onSubmit(){
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched()
  }
}
