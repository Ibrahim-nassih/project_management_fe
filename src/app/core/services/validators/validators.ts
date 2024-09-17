import { AbstractControl, ValidatorFn, Validators } from '@angular/forms'

export type MyErrorsOptions = { fr: string } & Record<string, any>
export type MyValidationErrors = Record<string, MyErrorsOptions>

export class CustomValidators extends Validators {
  static override minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null
      }
      return { minlength: { fr: `MinLength is ${minLength}` } }
    }
  }

  static override maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null
      }
      return {
        maxlength: { fr: `nombre maximum de caractères est de ${maxLength}` },
      }
    }
  }

  static minValue(minVal: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.min(minVal)(control) === null) {
        return null
      }
      return { minValue: { fr: `La valeur minimum est ${minVal}` } }
    }
  }
  static maxValue(maxVal: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.max(maxVal)(control) === null) {
        return null
      }
      return { minValue: { fr: `La valeur maximum est ${maxVal}` } }
    }
  }
}
