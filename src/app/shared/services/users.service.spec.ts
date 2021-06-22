import { getTestBed, TestBed } from '@angular/core/testing';

import { UserService } from './users.service';


describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ]
    });

    injector = getTestBed();
    service = injector.inject(UserService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });

  it('#takePmName should return null', () => {
    expect(service.takePmName()).toBeNull();
  });

  it('#takePmName should return Vasya (after #savePmName)', () => {
    const mockName = 'Vasya';
    service.savePmName(mockName);

    expect(service.takePmName()).toBe(mockName);
  });

  it('#takePmName should return Vasya and then null (after #savePmName and after #logout)', () => {
    const mockName = 'Vasya';
    service.savePmName(mockName);

    expect(service.takePmName()).toBe(mockName);

    service.logout();
    expect(service.takePmName()).toBeNull();
  });
});
