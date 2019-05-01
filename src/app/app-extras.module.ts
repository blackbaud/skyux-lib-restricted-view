import {
  NgModule
} from '@angular/core';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

import {
  RestrictedViewModule
} from './public/modules/restricted-view/restricted-view.module';

@NgModule({
  exports: [
    AppSkyModule,
    RestrictedViewModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
