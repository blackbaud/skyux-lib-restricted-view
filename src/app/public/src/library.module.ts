import {
  NgModule
} from '@angular/core';
import { RestrictedViewModule } from './modules/restricted-view/restricted-view.module';

export * from './modules/restricted-view';

@NgModule({
  exports: [
    RestrictedViewModule
  ]
})
export class RestrictedViewLibraryModule { }
