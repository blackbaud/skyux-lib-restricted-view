import {
  Component, OnDestroy
} from '@angular/core';

import {
  SkyRestrictedViewAuthService
} from './auth.service';

import {
  Subject
} from 'rxjs';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'sky-restricted-view',
  templateUrl: './restricted-view.component.html'
})
export class SkyRestrictedViewComponent implements OnDestroy {
  public ngUnsubscribe = new Subject();
  public isAuthenticated: boolean = false;

  constructor(private authService: SkyRestrictedViewAuthService) {
    this.authService.isAuthenticated
      .takeUntil(this.ngUnsubscribe)
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
    });
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
 }
