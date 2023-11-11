import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/content/layout-content.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component'),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/authentication/authentication.component'),
  },
];
