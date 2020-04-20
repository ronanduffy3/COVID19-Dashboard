import { TestBed } from '@angular/core/testing';

import { CoronaAPIServiceService } from './corona-apiservice.service';

describe('CoronaAPIServiceService', () => {
  let service: CoronaAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
