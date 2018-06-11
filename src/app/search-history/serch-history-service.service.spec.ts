import { TestBed, inject } from '@angular/core/testing';

import { SerchHistoryServiceService } from './serch-history-service.service';

describe('SerchHistoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerchHistoryServiceService]
    });
  });

  it('should be created', inject([SerchHistoryServiceService], (service: SerchHistoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
