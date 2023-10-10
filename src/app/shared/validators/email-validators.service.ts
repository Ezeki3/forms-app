import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, Validator } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {


  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
  //   const email = control.value;
  //   console.log( {email} );

  //   return of({
  //     emailTaken:true
  //   }).pipe(
  //     delay( 200 )
  //   )
    
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    const email = control.value;
    
    const httpCallObservable = new Observable<ValidationErrors|null> ( (suscriber) => {

      console.log({ email });

      if ( email === 'eze@gmail.com' ) {
        suscriber.next( { emailTaken: true });
        suscriber.complete();
      }

      suscriber.next(null);
      suscriber.complete();

    }).pipe(
      delay(2000)
    )

    return httpCallObservable;
    
  }



}