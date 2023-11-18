import { TestBed } from '@angular/core/testing';

import { StudentheaderService } from './studentheader.service';

describe('StudentheaderService', () => {
	let service: StudentheaderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StudentheaderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
