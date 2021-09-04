import { TestBed } from '@angular/core/testing';

import { ProjectParticipationService } from './project-participation.service';

describe('ProjectParticipationService', () => {
  let service: ProjectParticipationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectParticipationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
