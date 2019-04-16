import {
  NgModule
} from '@angular/core';

import {
  RestrictedViewModule
} from './modules/restricted-view/restricted-view.module';

@NgModule({
  exports: [
    RestrictedViewModule
  ]
})
export class RestrictedViewLibraryModule { }
