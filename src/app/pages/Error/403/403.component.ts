import { Component } from '@angular/core'
import {StorageService} from "../../../core/services/storageService";

@Component({
  selector: 'cui-system-403-page',
  templateUrl: './403.component.html',
})
export class Error403PageComponent {
  defaultUrl: string = ''
  constructor(
      private storage: StorageService
  ) {
    this.defaultUrl = this.storage.retrieveValue('defaultUrl')
  }
}
