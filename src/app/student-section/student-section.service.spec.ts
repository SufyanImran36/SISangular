import { TestBed } from '@angular/core/testing';

import { StudentSectionService } from './student-section.service';

describe('StudentSectionService', () => {
  let service: StudentSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
