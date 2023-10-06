import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validators/validator';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(emailPattern)] ],
    username: ['', [Validators.required, cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  })

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  isValidField( field: string){
    //TODO: Obtener validacion desde un servicio

  }

  onSubmit(){
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched()
  }
}
