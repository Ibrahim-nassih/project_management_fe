import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/core/services/jwt-auth.service';
import { UserProfileService } from 'src/app/core/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  SignupForm!: UntypedFormGroup;
  submitted = false;
  successmsg = false;
  error = '';
  year: number = new Date().getFullYear();
  showNavigationArrows: any;
  fieldTextType!: boolean;
  constructor(private formBuilder: UntypedFormBuilder, private router: Router,
    private authenticationService: JwtAuthService,
    private userService: UserProfileService){

  }
ngOnInit(): void {
      /**
     * Form Validatyion
     */
      this.SignupForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: ['', Validators.required],
        group_name:"comercial"
      });

          // Password Validation set
    var myInput = document.getElementById("password-input") as HTMLInputElement;
    var letter = document.getElementById("pass-lower");
    var capital = document.getElementById("pass-upper");
    var number = document.getElementById("pass-number");
    var length = document.getElementById("pass-length");

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
      let input = document.getElementById("password-contain") as HTMLElement;
      input.style.display = "block"
    };

    // When the user clicks outside of the password field, hide the password-contain box
    myInput.onblur = function () {
      let input = document.getElementById("password-contain") as HTMLElement;
      input.style.display = "none"
    };

    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
          letter?.classList.remove("invalid");
          letter?.classList.add("valid");
      } else {
          letter?.classList.remove("valid");
          letter?.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
          capital?.classList.remove("invalid");
          capital?.classList.add("valid");
      } else {
          capital?.classList.remove("valid");
          capital?.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
          number?.classList.remove("invalid");
          number?.classList.add("valid");
      } else {
          number?.classList.remove("valid");
          number?.classList.add("invalid");
      }

      // Validate length
      if (myInput.value.length >= 8) {
          length?.classList.remove("invalid");
          length?.classList.add("valid");
      } else {
          length?.classList.remove("valid");
          length?.classList.add("invalid");
      }
    };
}
  // convenience getter for easy access to form fields
  get f() { return this.SignupForm.controls; }
onSubmit() {
  this.submitted = true;
  if (this.SignupForm.invalid) {
    return;
  }
  else{
  //Register Api
  this.authenticationService.register(this.SignupForm.value).pipe(first()).subscribe(
    (data: any) => {
    this.successmsg = true;
    if (this.successmsg) {
      this.router.navigate(['/authentication/login']);
    }
  },
  (error: any) => {
    this.error = error ? error : '';
  });
}
}
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
