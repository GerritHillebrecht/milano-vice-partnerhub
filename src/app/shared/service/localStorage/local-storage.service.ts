import { Injectable, inject } from '@angular/core';
import { PlatformDetectionService } from '../platform';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly platformDetectionService = inject(PlatformDetectionService);

  getItem(key: string) {
    if (this.platformDetectionService.isPlatformBrowser) {
      return localStorage.getItem(key);
    }

    return null;
  }

  setItem(key: string, value: string) {
    if (this.platformDetectionService.isPlatformBrowser) {
      return localStorage.setItem(key, value);
    }

    return null;
  }
}
