import { TestBed } from '@angular/core/testing';

import { PickerService } from './picker.service';

describe('PickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickerService = TestBed.get(PickerService);
    expect(service).toBeTruthy();
  });
});
