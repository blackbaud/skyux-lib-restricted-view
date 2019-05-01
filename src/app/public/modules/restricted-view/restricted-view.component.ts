import {
  Component
} from '@angular/core';

import {
  RestrictedViewAuthService
} from './auth.service';

@Component({
  selector: 'skyux-restricted-view',
  templateUrl: './restricted-view.component.html'
})
export class RestrictedViewComponent {
  public isAuthenticated: boolean = false;
  constructor(private authService: RestrictedViewAuthService) {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
 }
