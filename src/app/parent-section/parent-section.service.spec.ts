import { TestBed } from '@angular/core/testing';

import { ParentSectionService } from './parent-section.service';

describe('ParentSectionService', () => {
  let service: ParentSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
