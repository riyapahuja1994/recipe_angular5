import { TestBed, inject } from '@angular/core/testing';

import { RceipeServiceService } from './rceipe-service.service';

describe('RceipeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RceipeServiceService]
    });
  });

  it('should be created', inject([RceipeServiceService], (service: RceipeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
