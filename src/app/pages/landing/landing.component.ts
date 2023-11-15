import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonPrimaryComponent } from '../../shared/ui/button';
import { LandingMainGridComponent } from './components';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    ButtonPrimaryComponent,
    RouterModule,
    LandingMainGridComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export default class LandingComponent {}
