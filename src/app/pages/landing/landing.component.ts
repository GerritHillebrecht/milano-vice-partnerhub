import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from '../../shared/ui/button';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ButtonPrimaryComponent, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export default class LandingComponent {
  protected readonly btnOptions = signal({
    icon: faReceipt,
  });
}
