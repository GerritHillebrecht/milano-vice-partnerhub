import { Injectable, inject, signal } from '@angular/core';
import { PlatformDetectionService } from '@shared/service/platform';

@Injectable({
  providedIn: 'root',
})
export class DeliverectTokenService {
  private readonly platformDetectorService = inject(PlatformDetectionService);

  readonly refreshToken = signal(
    this.platformDetectorService.isPlatformBrowser
      ? localStorage.getItem('deliverect_bearer_token')
      : ''
  );

  updateToken(token: string) {
    if (this.platformDetectorService.isPlatformBrowser) {
      localStorage.setItem('deliverect_bearer_token', token);
      this.refreshToken.update(() => token);
    }
  }
}
