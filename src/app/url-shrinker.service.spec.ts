import { TestBed, inject } from '@angular/core/testing';

import { UrlShrinkerService } from './url-shrinker.service';

describe('UrlShrinkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlShrinkerService]
    });
  });

  it('should ...', inject([UrlShrinkerService], (service: UrlShrinkerService) => {
    expect(service).toBeTruthy();
  }));
});
