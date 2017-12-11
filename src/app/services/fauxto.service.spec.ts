import { TestBed, inject } from '@angular/core/testing';

import { FauxtoService } from './fauxto.service';

describe('FauxtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FauxtoService]
    });
  });

  it('should be created', inject([FauxtoService], (service: FauxtoService) => {
    expect(service).toBeTruthy();
  }));
});
