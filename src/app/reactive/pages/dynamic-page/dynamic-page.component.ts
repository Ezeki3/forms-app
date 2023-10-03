import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Note', Validators.required],
    ])
  })

  constructor(
    private fb: FormBuilder
  ) { }

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;  
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.myForm.value)

    if( this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }
  }
}
