import { TestBed } from '@angular/core/testing';

import { SolidarityHistoryService } from './solidarity-history.service';

describe('SolidarityHistoryService', () => {
  let service: SolidarityHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidarityHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
