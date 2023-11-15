import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { SettingsDeliverectTokenComponent } from '../../utils/settings';

export interface AppRoute {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SettingsDeliverectTokenComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  protected readonly routes = signal<AppRoute[]>([
    { path: '/', label: 'Partner Hub' },
    { path: '/invoice', label: 'Abrechnung' },
    { path: '/orders', label: 'Meine Bestellungen' },
    { path: '/recipes', label: 'Backanleitung' },
  ]);
}
