import { Injectable } from '@angular/core'
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { UsersService } from '../users.service'

@Injectable()
export class UniqueUsernameValidator implements AsyncValidator {
  constructor(private userService: UsersService) {}

  validate(
    ctrl: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.usernameExist(ctrl.value).pipe(
      map(isTaken => {
        return isTaken ? { uniqueUsernameValidator: { fr: `Username déjà utilisé` } } : null
      }),
      catchError(() => of(null)),
    )
  }
}
