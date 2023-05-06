import { TestBed } from '@angular/core/testing';

import { DataListFacadeService } from './data-list-facade.service';

describe('DataListFacadeService', () => {
  let service: DataListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
