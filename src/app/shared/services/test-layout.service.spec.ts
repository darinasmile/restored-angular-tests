import { TestBed } from '@angular/core/testing';
import { TeammatesService } from './teammates.service';

import { TestLayoutService } from './test-layout.service';

describe('TestLayoutService with TestBed', () => {
  let service: TestLayoutService;
  let teamServiceSpy: jasmine.SpyObj<TeammatesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TeammatesService', ['getTestUser']);
    TestBed.configureTestingModule({
      providers: [
        TestLayoutService,
        { provide: TeammatesService, useValue: spy }
      ]
    });
    service = TestBed.inject(TestLayoutService);
    teamServiceSpy = TestBed.inject(TeammatesService) as jasmine.SpyObj<TeammatesService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTestUser should return Vasya value from a spy', () => {
    const userValue = 'Vasya';
    teamServiceSpy.getTestUser.and.returnValue(userValue);
  
    expect(service.getVasya())
      .toBe(userValue, 'service returned stub value');
    expect(teamServiceSpy.getTestUser.calls.count())
      .toBe(1, 'spy method was called once');
    expect(teamServiceSpy.getTestUser.calls.mostRecent().returnValue)
      .toBe(userValue);
  });
});

describe('TestLayoutService without Angular testing support', () => {
  let testService: TestLayoutService;

  it('#getValue should return real value from the real service', () => {
    testService = new TestLayoutService(new TeammatesService());
    expect(testService.getVasya()).toBe('Vasya');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getTestUser` spy on an object representing the TeammatesService
    const teammateServiceSpy =
      jasmine.createSpyObj('TeammatesService', ['getTestUser']);

    // set the value to return when the `getTestUser` spy is called.
    const userValue = 'Vasya';
    teammateServiceSpy.getTestUser.and.returnValue(userValue);

    testService = new TestLayoutService(teammateServiceSpy);

    expect(testService.getVasya())
      .toBe(userValue, 'service returned Vasya');
    expect(teammateServiceSpy.getTestUser.calls.count())
      .toBe(1, 'spy method was called once');
    expect(teammateServiceSpy.getTestUser.calls.mostRecent().returnValue)
      .toBe(userValue);
  });
});

describe('TestLayoutService without beforeEach', () => {
  function setup() {
    const valueServiceSpy =
      jasmine.createSpyObj('TeammatesService', ['getTestUser']);
    const stubValue = 'Vasya';
    const testService = new TestLayoutService(valueServiceSpy);
  
    valueServiceSpy.getTestUser.and.returnValue(stubValue);
    return { testService, stubValue, valueServiceSpy };
  }

  it('#getTestUser should return stubbed value from a spy', () => {
    const { testService, stubValue, valueServiceSpy } = setup();
    expect(testService.getVasya())
      .toBe(stubValue, 'service returned Vasya');
    expect(valueServiceSpy.getTestUser.calls.count())
      .toBe(1, 'spy method was called once');
    expect(valueServiceSpy.getTestUser.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
})
