import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import { API_URL } from "./http/api-url.token";
import { provideStore } from '@ngrx/store';
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { reducer, USERS_FEATURE_KEY } from "./+state/users.reducer";
import { UsersEffect } from "./+state/users.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    {
      provide: API_URL,
      useValue: environment.api_url
    },
    provideHttpClient(withFetch()),
    provideStore({
      [USERS_FEATURE_KEY]: reducer,
    }),
    provideEffects(UsersEffect),
    {
      provide: USERS_FEATURE_KEY,
      useValue: 'users'
    },
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
]};
