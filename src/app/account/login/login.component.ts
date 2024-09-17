import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import * as UserActions from '../../store/user/actions';
import {Store} from "@ngrx/store";
import {JwtAuthService} from "../../core/services/jwt-auth.service";
import {StorageService} from "../../core/services/storageService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  returnUrl!: string;
  toast!: false;
  showNavigationArrows: any;

  // set the current year
  year: number = new Date().getFullYear();
  logo: string = ''

  constructor(
      private formBuilder: UntypedFormBuilder,
      private store: Store<any>,
      private jwtAuthService: JwtAuthService,
      private storage: StorageService
  ) {
      if (localStorage.getItem('accessToken') && localStorage.getItem('accessAuthorization') && !this.jwtAuthService.isTokenExpired()) {
      this.jwtAuthService.redirectToDefaultRouteIsTokenExist(
        this.jwtAuthService.getRoles(),
      )
    }
  }

  ngOnInit(): void {

     this.loginForm = this.formBuilder.group({
          username: ['', [Validators.required]],
          password: ['', [Validators.required]],
      });
  }

  get f() { return this.loginForm.controls; }

   onSubmit() {
      this.submitted = true
       if (this.loginForm.invalid) {
           return;
       } else {
           const payload = {
               username: this.f['username'].value,
               password: this.f['password'].value,
           }
           this.store.dispatch(UserActions.LOGIN({payload}))
       }

   }
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
