import {
  NgModule
} from '@angular/core';

import {
  RestrictedViewLibraryModule
} from './public';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule,
    RestrictedViewLibraryModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
