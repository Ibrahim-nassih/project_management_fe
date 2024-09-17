import { Component } from '@angular/core'
import {StorageService} from "../../../core/services/storageService";

@Component({
  selector: 'cui-system-404-page',
  templateUrl: './404.component.html',
})
export class Error404PageComponent {

  defaultUrl: string = ''
  constructor(
      private storage: StorageService
  ) {
    this.defaultUrl = this.storage.retrieveValue('defaultUrl')
  }

}
