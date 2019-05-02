import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Renderer2,
  OnDestroy
} from '@angular/core';

import {
  SkyRestrictedViewAuthService
} from './auth.service';

import {
  Subject
} from 'rxjs';

import 'rxjs/add/operator/takeUntil';

@Directive({
  selector: '[skyRestrictedView]'
})
export class SkyRestrictedViewDirective implements OnDestroy {
  public ngUnsubscribe = new Subject();

  constructor(
    private authService: SkyRestrictedViewAuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.viewContainer.clear();
    this.authService.isAuthenticated
      .takeUntil(this.ngUnsubscribe)
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          const ref: any = this.viewContainer.get(0);
          const directiveElement = ref.rootNodes[0];
          this.renderer.addClass(directiveElement, 'skyux-restricted-view');
        } else {
          this.viewContainer.clear();
        }
      });
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
