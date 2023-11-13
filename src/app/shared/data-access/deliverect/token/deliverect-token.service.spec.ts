import { TestBed } from '@angular/core/testing';

import { DeliverectTokenService } from './deliverect-token.service';

describe('DeliverectTokenService', () => {
  let service: DeliverectTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverectTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
