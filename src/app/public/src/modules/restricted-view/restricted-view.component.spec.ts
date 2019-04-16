import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@blackbaud/skyux-builder/runtime/testing/browser';

import {
  BehaviorSubject
} from 'rxjs';

import {
  RestrictedViewAuthService
} from './auth.service';

import {
  RestrictedViewTestComponent
} from './fixtures/restricted-view.component.fixture';

import {
  RestrictedViewModule
} from './restricted-view.module';

class MockAuth {
  public isAuthenticated = new BehaviorSubject(true);
}

describe('RestrictedViewComponent', () => {
  let component: RestrictedViewTestComponent;
  let fixture: ComponentFixture<RestrictedViewTestComponent>;
  let mockAuth: any;

  beforeEach(() => {
    mockAuth = new MockAuth();

    TestBed.configureTestingModule({
      imports: [
        RestrictedViewModule
      ],
      declarations: [
        RestrictedViewTestComponent
      ],
      providers: [
        { provide: RestrictedViewAuthService, useValue: mockAuth }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewTestComponent);
    component = fixture.componentInstance;
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
