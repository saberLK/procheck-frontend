import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllCandidaturesComponent } from './components/get-all-candidatures/get-all-candidatures.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';



/*const keycloakService = new KeycloakService();

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'procheck',
  clientId: 'frontend',
};*/

@NgModule({
  declarations: [
    AppComponent,
    GetAllCandidaturesComponent,
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //angular material imports
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule
  ],
  providers: [/*{
    provide: KeycloakService,
    useValue: keycloakService,
  },*/
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   /* keycloakService
      .init({
        config: keycloakConfig,
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false,
        },
        enableBearerInterceptor: true,
        bearerExcludedUrls: ['/assets', '/clients/public'],
      })
      .then(() => {
        console.log('Keycloak is initialized');
      })
      .catch((error) => {
        console.error('Error initializing Keycloak', error);
      });*/
  }
}
