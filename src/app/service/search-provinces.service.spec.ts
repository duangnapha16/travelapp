import { TestBed } from '@angular/core/testing';

import { SearchProvincesService } from './search-provinces.service';

describe('SearchProvincesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchProvincesService = TestBed.get(SearchProvincesService);
    expect(service).toBeTruthy();
  });
});
