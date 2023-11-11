import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly routes = signal<{ path: string; label: string }[]>([
    { path: '/', label: 'Partner Hub' },
    { path: '/invoice', label: 'Abrechnung' },
    { path: '/orders', label: 'Meine Bestellungen' },
    { path: '/recipes', label: 'Backanleitung' },
  ]);
}
