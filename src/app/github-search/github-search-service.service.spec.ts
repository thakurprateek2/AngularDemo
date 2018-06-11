import { TestBed, inject } from '@angular/core/testing';

import { GithubSearchServiceService } from './github-search-service.service';

describe('GithubSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubSearchServiceService]
    });
  });

  it('should be created', inject([GithubSearchServiceService], (service: GithubSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
