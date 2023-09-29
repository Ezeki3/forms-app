import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    name:[''],
    price:[0],
    inStorage:[0]
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  onSave():void {
    console.log(this.myForm.value)
  }

}
