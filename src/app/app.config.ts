import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyCfVL5JM1z3dHO5Ep8huqZNjhoWAXBys5E",
  authDomain: "lika-step.firebaseapp.com",
  projectId: "lika-step",
  storageBucket: "lika-step.appspot.com",
  messagingSenderId: "790482436465",
  appId: "1:790482436465:web:cbcdae9414fc8a82e876d0"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)), provideHttpClient(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp(
    { "projectId": "lika-step", "appId": "1:790482436465:web:cbcdae9414fc8a82e876d0", "storageBucket": "lika-step.appspot.com", "apiKey": "AIzaSyCfVL5JM1z3dHO5Ep8huqZNjhoWAXBys5E", "authDomain": "lika-step.firebaseapp.com", "messagingSenderId": "790482436465" }
  )), provideDatabase(() => getDatabase())]
};
