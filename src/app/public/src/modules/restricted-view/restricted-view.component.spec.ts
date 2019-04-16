import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { RestrictedViewComponent } from './restricted-view.component';
import { Observable } from 'rxjs';
import { RestrictedViewAuthService } from './auth.service';

class MockAuth {
  public isAuthenticated = Observable.of(true);
}

describe('RestrictedViewComponent', () => {
  let component: RestrictedViewComponent;
  let fixture: ComponentFixture<RestrictedViewComponent>;
  let mockAuth: any;

  beforeEach(() => {
    mockAuth = new MockAuth();

    TestBed.configureTestingModule({
      declarations: [
        RestrictedViewComponent
      ],
      providers: [
        { provide: RestrictedViewAuthService, useValue: mockAuth }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should authenticate', () => {
    expect(component.isAuthenticated).toBeTruthy();
  });
});
