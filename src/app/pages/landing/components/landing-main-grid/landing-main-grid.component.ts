import { CommonModule } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { LandingPageCardComponent } from '@pages/landing/components';
import { ButtonPrimaryComponent } from '@shared/ui/button';

@Component({
  selector: 'app-landing-main-grid',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageCardComponent,
    ButtonPrimaryComponent,
    RouterModule,
  ],
  templateUrl: './landing-main-grid.component.html',
  styleUrls: ['./landing-main-grid.component.scss'],
})
export class LandingMainGridComponent {
  protected readonly btnOptions = signal({
    icon: faReceipt,
  });
}
