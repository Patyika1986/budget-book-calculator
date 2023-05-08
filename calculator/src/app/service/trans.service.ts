import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TransService {

  /**
   * Load the i18n and set default language
   * add language
   * @param {TranslateService} translate 
   */
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  /**
   * Switch language
   * @param {string} language 
   */
  switchLang(language: string): void {
    this.translate.use(language);
  }
}
