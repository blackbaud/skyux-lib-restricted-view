import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Renderer2
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
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.viewContainer.clear();
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
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
}
