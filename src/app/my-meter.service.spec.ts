import { TestBed } from '@angular/core/testing';

import { MyMeterService } from './my-meter.service';

describe('MyMeterService', () => {
  let service: MyMeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
