import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@core';

@Component({
  selector: 'app-translate',
  template: `
    <button mat-icon-button  class="matero-toolbar-button" [matMenuTriggerFor]="menu">
      <mat-icon>dehaze</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item *ngFor="let lang of langs | keyvalue" (click)="useLanguage(lang.key)">
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
  styles: [],
})
export class TranslateComponent {
  langs = {
    'en-US': 'English',
    'hi-IN': 'हिन्दी'
    };

  constructor(private translate: TranslateService, private settings: SettingsService) {
    translate.addLangs(['en-US', 'hi-IN']);
  }

  useLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
    this.settings.setLanguage(language);
  }
}
