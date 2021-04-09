import { TestBed } from '@angular/core/testing';
import { TeammatesService } from './teammates.service';

import { TestLayoutService } from './test-layout.service';

describe('TestLayoutService', () => {
  let service: TestLayoutService;
  let teamServiceSpy: jasmine.SpyObj<TeammatesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TeammatesService', ['getTestUser']);
    TestBed.configureTestingModule({
      providers: [
        TestLayoutService,
        { provide: TeammatesService, useValue: spy}
      ]
    });
    service = TestBed.inject(TestLayoutService);
    teamServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
