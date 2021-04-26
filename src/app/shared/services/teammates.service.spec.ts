import { TestBed } from '@angular/core/testing';

import { TeammatesService } from './teammates.service';

describe('TeammatesService', () => {
  let service: TeammatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTestUser should return Vasya value', () => {
    expect(service.getTestUser()).toBe('Vasya');
  });

  it('#getObservableValue should return Vasya 2.0',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('Vasya 2.0');
      done();
    });
  });

  it('#getPromiseValue should return Vasya v3.0',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('Vasya v3.0');
      done();
    });
  });
});
