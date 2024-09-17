import {Component, HostListener} from '@angular/core';
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {StorageService} from "./core/services/storageService";
import {LOCKSCREEN} from "./store/user/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clinops';
  userActivity: any
  userInactive: Subject<any> = new Subject()

  constructor(
      private ngrxStore: Store<any>,
      private storage: StorageService
  ) {

    this.storage.saveValue('lang',(storage.retrieveValue('lang') ? storage.retrieveValue('lang') : 'fr'))
    this.setTimeout()
    this.userInactive.subscribe(() => {
      const user = storage.retrieveValue('user')
      if (user && user.username) {
        this.ngrxStore.dispatch(LOCKSCREEN())
      }
    })
  }


  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity)
    this.setTimeout()
  }

  setTimeout() {
    this.userActivity = setTimeout(
        () => this.userInactive.next(undefined),
        30 * 30 * 1000,
    )
  }
}
