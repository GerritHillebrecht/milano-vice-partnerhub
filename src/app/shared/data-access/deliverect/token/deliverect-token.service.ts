import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '@shared/service/localStorage';
import { PlatformDetectionService } from '@shared/service/platform';

@Injectable({
  providedIn: 'root',
})
export class DeliverectTokenService {
  private readonly localStorage = inject(LocalStorageService);

  readonly refreshToken = signal(
    this.localStorage.getItem('deliverect_bearer_token')
  );

  updateToken(token: string) {
    this.localStorage.setItem('deliverect_bearer_token', token);
    this.refreshToken.update(() => token);
  }
}
