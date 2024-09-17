import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgbCarouselModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

// Load Icons
import { defineElement  } from 'lord-icon-element';
import lottie from 'lottie-web';



import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {LockScreenComponent} from "./lockscreen/lockscreen.component";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    LockScreenComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    AccountRoutingModule,
    SharedModule,
    NgbCarouselModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { 
  constructor() {
    defineElement (lottie.loadAnimation);
  }
}
