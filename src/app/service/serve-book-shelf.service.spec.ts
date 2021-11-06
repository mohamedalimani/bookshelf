import { TestBed } from '@angular/core/testing';

import { ServeBookShelfService } from './serve-book-shelf.service';

describe('ServeBookShelfService', () => {
  let service: ServeBookShelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeBookShelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
