import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DeliverectTokenService } from '@shared/data-access/deliverect/token';

@Component({
  selector: 'app-settings-deliverect-token',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './settings-deliverect-token.component.html',
  styleUrl: './settings-deliverect-token.component.scss',
})
export class SettingsDeliverectTokenComponent implements OnInit {
  protected readonly settingsIcon = signal(faGear);
  private readonly refreshTokenService = inject(DeliverectTokenService);

  protected readonly tokenForm = new FormGroup({
    token: new FormControl(this.refreshTokenService.refreshToken()),
  });

  get token() {
    return this.tokenForm.get('token');
  }

  ngOnInit(): void {
    this.token?.valueChanges.subscribe((token) => {
      if (token) {
        this.refreshTokenService.updateToken(token);
      }
    });
  }
}
