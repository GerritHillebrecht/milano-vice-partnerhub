import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';

export interface AppRoute {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected readonly routes = signal<AppRoute[]>([
    { path: '/', label: 'Partner Hub' },
    { path: '/invoice', label: 'Abrechnung' },
    { path: '/orders', label: 'Meine Bestellungen' },
    { path: '/recipes', label: 'Backanleitung' },
  ]);

  protected readonly activeRoute = signal<AppRoute>(this.routes()[0]);

  protected updateActiveRoute(route: AppRoute) {
    this.activeRoute.update(() => route);
  }

  ngOnInit(): void {
    this.activatedRoute.snapshot.url.forEach((url) => {
      console.log({ url });
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        const route = this.routes().find((route) => route.path === url);
        console.log({ event, route });
        if (route) {
          this.updateActiveRoute(route);
        }
      }
    });
  }
}
