import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   inStorage: new FormControl(''),
  // })

  public myForm: FormGroup = this.formBuilder.group({
    name:['', [ Validators.required, Validators.minLength(3)] ],
    price:[0, [ Validators.required, Validators.min(0)] ],
    inStorage:[0, [ Validators.required, Validators.min(0)] ]
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  onSave():void {
    if( this.myForm.invalid ) return
    console.log(this.myForm.value)
  }

}
