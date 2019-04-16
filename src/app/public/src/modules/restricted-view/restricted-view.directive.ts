import {
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import {
  RestrictedViewAuthService
} from './auth.service';

@Directive({
  selector: '[skyuxRestrictedView]'
})
export class RestrictedViewDirective {
  constructor(
    private authService: RestrictedViewAuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.clear();
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
