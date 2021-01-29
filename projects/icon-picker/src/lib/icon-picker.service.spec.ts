import { TestBed } from '@angular/core/testing';

import { IconPickerService } from './icon-picker.service';

describe('IconPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconPickerService = TestBed.get(IconPickerService);
    expect(service).toBeTruthy();
  });
});
