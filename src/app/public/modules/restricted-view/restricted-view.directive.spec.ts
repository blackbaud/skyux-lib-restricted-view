import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  SkyRestrictedViewDirective
} from './restricted-view.directive';

import {
  SkyRestrictedViewAuthService
} from './auth.service';

import {
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

import {
  RestrictedViewTestComponent
} from './fixtures/restricted-view.component.fixture';

import {
  By
} from '@angular/platform-browser';

import {
  BehaviorSubject
} from 'rxjs';

import {
  SkyAppWindowRef
} from '@skyux/core';

import {
  SkyRestrictedViewModule
} from './restricted-view.module';

class MockViewContainer {
  public createEmbeddedView(ref: any) {
    return true;
  }

  public clear() {
    return true;
  }
}

describe('SkyRestrictedViewDirective', () => {
  let fixture: ComponentFixture<RestrictedViewTestComponent>;
  let directiveElement: any;
  let mockAuth: any;
  let mockViewContainer: any;

  beforeEach(() => {
    mockAuth = {
      isAuthenticated: new BehaviorSubject(true)
    };
    mockViewContainer = new MockViewContainer();

    TestBed.configureTestingModule({
      imports: [
        SkyRestrictedViewModule
      ],
      declarations: [
        RestrictedViewTestComponent
      ],
      providers: [
        SkyRestrictedViewDirective,
        TemplateRef,
        SkyAppWindowRef,
        { provide: SkyRestrictedViewAuthService, useValue: mockAuth },
        { provide: ViewContainerRef, useValue: mockViewContainer }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewTestComponent);
  });

  it('should display content if user is authenticated', () => {
    directiveElement = fixture.debugElement.query(By.css('.skyux-restricted-view'));
    expect(directiveElement).toBeTruthy();
  });

  it('should not display content if use is not authenticated', () => {
    mockAuth.isAuthenticated.next(false);
    directiveElement = fixture.debugElement.query(By.css('.skyux-restricted-view'));
    expect(directiveElement).not.toBeTruthy();
  });
});
