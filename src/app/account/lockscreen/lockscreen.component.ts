import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {StorageService} from "../../core/services/storageService";
import {Store} from "@ngrx/store";
import * as UserActions from '../../store/user/actions';

@Component({
    selector: 'app-cover',
    templateUrl: './lockscreen.component.html',
    styleUrls: ['./lockscreen.component.scss']
})

/**
 * Lock Screen Cover Component
 */
export class LockScreenComponent implements OnInit {

    // Login Form
    lockscreenForm!: UntypedFormGroup;
    submitted = false;
    error = '';
    year: number = new Date().getFullYear();
    showNavigationArrows: any;
    userName: string = ''
    username: string = ''

    constructor(
        private formBuilder: UntypedFormBuilder,
        private storage: StorageService,
        private ngrxStore: Store<any>
    ) {

        this.username = this.storage.retrieveValue('user').username
        this.userName = this.storage.retrieveValue('user').lastName + ' ' + this.storage.retrieveValue('user').firstName
    }
    get f() { return this.lockscreenForm.controls; }


    ngOnInit(): void {
        this.lockscreenForm = this.formBuilder.group({
            username: [this.username, [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required]],
        })
    }
    onSubmit() {
        this.submitted = true;
        if (this.lockscreenForm.invalid) {
            return;
        } else {
            const payload = {
                username: this.lockscreenForm.value.username,
                password: this.lockscreenForm.value.password,
            }
            this.ngrxStore.dispatch(UserActions.LOGIN({payload: payload}))
        }
    }

}
