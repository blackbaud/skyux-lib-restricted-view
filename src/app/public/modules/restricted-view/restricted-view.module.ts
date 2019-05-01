import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RestrictedViewAuthService
} from './auth.service';

import {
  RestrictedViewComponent
} from './restricted-view.component';

import {
  RestrictedViewDirective
} from './restricted-view.directive';

@NgModule({
  declarations: [
    RestrictedViewDirective,
    RestrictedViewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RestrictedViewAuthService
  ],
  exports: [
    RestrictedViewDirective,
    RestrictedViewComponent
  ]
})
export class RestrictedViewModule { }
