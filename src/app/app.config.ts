import {
  ApplicationConfig,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom([
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'milano-vice-abrechnung',
          appId: '1:901351635354:web:062c1fc83eb5b3e3e5a223',
          storageBucket: 'milano-vice-abrechnung.appspot.com',
          // locationId: 'europe-west',
          apiKey: 'AIzaSyA39Yw6gKvVGw1g4Yy_Z8vG6l_qVQXFDSE',
          authDomain: 'milano-vice-abrechnung.firebaseapp.com',
          messagingSenderId: '901351635354',
          measurementId: 'G-43CGV4XPZQ',
        })
      ),
      provideAuth(() => getAuth()),
      provideAnalytics(() => getAnalytics()),
      provideFirestore(() => getFirestore()),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideStorage(() => getStorage()),
      // provideAppCheck(() => {
      //   // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      //   const provider = new ReCaptchaEnterpriseProvider(
      //     '6LeHrQspAAAAABuif8NTViwJYN6T-gBeb_fieLXq'
      //   );
      //   return initializeAppCheck(undefined, {
      //     provider,
      //     isTokenAutoRefreshEnabled: true,
      //   });
      // }),
    ]),
    ScreenTrackingService,
    UserTrackingService,
  ],
};
