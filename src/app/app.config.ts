import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyB63Qo0wHs3WTY-RDOxKQYeGcXDg41AiYU",
  authDomain: "ukkasha-portfolio.firebaseapp.com",
  projectId: "ukkasha-portfolio",
  storageBucket: "ukkasha-portfolio.firebasestorage.app",
  messagingSenderId: "693045966947",
  appId: "1:693045966947:web:ee42768a4e0b12d2fbe056",
  measurementId: "G-7Q46JHXGLY"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
