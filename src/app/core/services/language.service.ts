import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import {StorageService} from "./storageService";

@Injectable({ providedIn: 'root' })
export class LanguageService {

  public languages: string[] = ['en', 'es', 'de', 'it', 'ru'];

  constructor(
      public translate: TranslateService,
      private storage: StorageService
  ) {

    let browserLang: any;
    /***
     * cookie Language Get
    */
    this.translate.addLangs(this.languages);
    if (this.storage.retrieveValue('lang')) {
      browserLang = this.storage.retrieveValue('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : this.storage.retrieveValue('lang'));
  }

  public setLanguage(lang: any) {
    this.translate.use(lang);
    this.storage.saveValue('lang', lang);
  }

}
