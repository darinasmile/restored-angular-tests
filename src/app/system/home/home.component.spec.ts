
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from 'src/app/shared/services/users.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get null name from UserService on ngInit and set name value to empty string', () => {
    spyOn(userService, 'takePmName').and.callFake(() => null);

    component.ngOnInit();
    expect(component.name).toBe('');
  });

  it('should update the PM name on the input field', fakeAsync(() => {
    const mockPmName = 'Oleg';
    component.name = mockPmName;

    fixture.detectChanges();

    tick();

    const input = fixture.debugElement.query(By.css('mat-form-field#pm-name input')).nativeElement;

    expect(input.value).toBe(mockPmName);
  }));

  it('should update the PM name in the component', fakeAsync(() => {
    const mockPmName = 'Slava';
    const input = fixture.debugElement.query(By.css('mat-form-field#pm-name input')).nativeElement;
    

    input.value = mockPmName;
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.name).toEqual(mockPmName);
  }));
});
