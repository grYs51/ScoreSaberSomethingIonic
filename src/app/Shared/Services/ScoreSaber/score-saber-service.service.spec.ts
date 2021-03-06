import { TestBed } from '@angular/core/testing';

import { ScoreSaberServiceService } from './score-saber-service.service';

describe('ScoreSaberServiceService', () => {
  let service: ScoreSaberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreSaberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
