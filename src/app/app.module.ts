import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule} from "./layouts/layouts.module";

// Auth
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Language
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {AppStoreModule} from "./store/app-store.module";
import {JwtAuthService} from "./core/services/jwt-auth.service";
import {Error403PageComponent} from "./pages/Error/403/403.component";
import {Error404PageComponent} from "./pages/Error/404/404.component";
import {SharedModule} from "./shared/shared.module";
import {AuthInterceptor} from "./core/services/interceptor/auth-interceptor.interceptor";
import { SpacesModule } from './pages/spaces/spaces.module';
export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Error403PageComponent,
    Error404PageComponent
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    Ng2SearchPipeModule,
    AppStoreModule,
    SharedModule,
    SpacesModule,
  ],
  providers: [
    JwtAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
