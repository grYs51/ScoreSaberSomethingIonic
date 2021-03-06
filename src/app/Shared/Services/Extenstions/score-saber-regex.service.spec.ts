import { TestBed } from '@angular/core/testing';

import { ScoreSaberRegexService } from './score-saber-regex.service';

describe('ScoreSaberRegexService', () => {
  let service: ScoreSaberRegexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreSaberRegexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
