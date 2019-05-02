import {
  NgModule
} from '@angular/core';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyRestrictedViewModule
} from './public/modules/restricted-view/restricted-view.module';

@NgModule({
  exports: [
    AppSkyModule,
    SkyRestrictedViewModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
