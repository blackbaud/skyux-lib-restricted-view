import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestrictedViewDirective } from './restricted-view.directive';
import { RestrictedViewAuthService } from './auth.service';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { RestrictedViewTestComponent } from './fixtures/restricted-view.component.fixture';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { SkyAppWindowRef } from '@skyux/core';

class MockViewContainer {
  public createEmbeddedView(ref: any) {
    return true;
  }

  public clear() {
    return true;
  }
}

describe('RestrictedViewDirective', () => {
  let component: RestrictedViewTestComponent;
  let fixture: ComponentFixture<RestrictedViewTestComponent>;
  let directiveElement: any;
  let mockAuth: any;
  let mockViewContainer: any;

  it('should authenticate', () => {
    mockAuth = {
      isAuthenticated: new BehaviorSubject(true)
    };
    mockViewContainer = new MockViewContainer();

    TestBed.configureTestingModule({
      declarations: [
        RestrictedViewTestComponent,
        RestrictedViewDirective
      ],
      providers: [
        RestrictedViewDirective,
        TemplateRef,
        SkyAppWindowRef,
        { provide: RestrictedViewAuthService, useValue: mockAuth },
        { provide: ViewContainerRef, useValue: mockViewContainer }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewTestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.css('div'));

    expect(directiveElement).toBeTruthy();
  });

  it('should not authenticate', () => {
    mockAuth = {
      isAuthenticated: new BehaviorSubject(false)
    };
    mockViewContainer = new MockViewContainer();

    TestBed.configureTestingModule({
      declarations: [
        RestrictedViewTestComponent,
        RestrictedViewDirective
      ],
      providers: [
        RestrictedViewDirective,
        TemplateRef,
        SkyAppWindowRef,
        { provide: RestrictedViewAuthService, useValue: mockAuth },
        { provide: ViewContainerRef, useValue: mockViewContainer }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RestrictedViewTestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.css('div'));

    expect(directiveElement).not.toBeTruthy();
  });
});
