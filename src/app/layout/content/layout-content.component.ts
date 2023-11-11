import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/ui/navigation/navbar/navbar.component';

@Component({
  selector: 'app-layout-content',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './layout-content.component.html',
  styleUrl: './layout-content.component.scss',
})
export default class LayoutContentComponent {}
