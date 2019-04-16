import {
  NgModule
} from '@angular/core';

import {
  RestrictedViewModule
} from './public';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    RestrictedViewModule
  ],
  exports: [
    RestrictedViewModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
