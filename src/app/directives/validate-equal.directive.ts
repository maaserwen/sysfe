import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
  ]
})
export class EqualValidator implements Validator {
  constructor( @Attribute('validateEqual') public validateEqual: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
      // self value (e.g. retype password)
      const v = c.value;

      // control value (e.g. password)
      const e = c.root.get(this.validateEqual);

      // value not equal
      if (e && v !== e.value) {
        return {
          validateEqual: false
        };
      }
      return null;
  }
}
