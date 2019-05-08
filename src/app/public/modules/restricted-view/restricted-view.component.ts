import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  SkyRestrictedViewAuthService
} from './restricted-view-auth.service';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'sky-restricted-view',
  templateUrl: './restricted-view.component.html'
})
export class SkyRestrictedViewComponent implements OnDestroy {
  public isAuthenticated = false;

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private authService: SkyRestrictedViewAuthService
  ) {
    this.authService.isAuthenticated
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
    });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
 }
