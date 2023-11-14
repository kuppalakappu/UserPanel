import { TestBed } from '@angular/core/testing';

import { AskAnyService } from './ask-any.service';

describe('AskAnyService', () => {
  let service: AskAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
