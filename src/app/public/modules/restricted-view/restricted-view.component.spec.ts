import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  BehaviorSubject
} from 'rxjs';

import {
  SkyRestrictedViewAuthService
} from './auth.service';

import {
  RestrictedViewTestComponent
} from './fixtures/restricted-view.component.fixture';

import {
  SkyRestrictedViewModule
} from './restricted-view.module';

class MockAuth {
  public isAuthenticated = new BehaviorSubject(true);
}

describe('SkyRestrictedViewComponent', () => {
  let fixture: ComponentFixture<RestrictedViewTestComponent>;
  let mockAuth: any;

  beforeEach(() => {
    mockAuth = new MockAuth();

    TestBed.configureTestingModule({
      imports: [
        SkyRestrictedViewModule
      ],
      declarations: [
        RestrictedViewTestComponent
      ],
      providers: [
        { provide: SkyRestrictedViewAuthService, useValue: mockAuth }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewTestComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should display content if the user is authenticated', () => {
    fixture.detectChanges();
    const element = fixture.elementRef.nativeElement.querySelector('p');
    expect(element).toBeTruthy();
  });

  it('should not display content if the user is not authenticated', () => {
    mockAuth.isAuthenticated.next(false);

    fixture.detectChanges();
    const element = fixture.elementRef.nativeElement.querySelector('p');
    expect(element).not.toBeTruthy();
  });
});