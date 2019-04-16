import {
  NgModule
} from '@angular/core';

import {
  RestrictedViewLibraryModule
} from './public';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  exports: [
    RestrictedViewLibraryModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
