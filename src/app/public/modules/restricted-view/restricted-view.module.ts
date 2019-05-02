import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyRestrictedViewAuthService
} from './auth.service';

import {
  SkyRestrictedViewComponent
} from './restricted-view.component';

import {
  SkyRestrictedViewDirective
} from './restricted-view.directive';

@NgModule({
  declarations: [
    SkyRestrictedViewDirective,
    SkyRestrictedViewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SkyRestrictedViewAuthService
  ],
  exports: [
    SkyRestrictedViewDirective,
    SkyRestrictedViewComponent
  ]
})
export class SkyRestrictedViewModule { }
