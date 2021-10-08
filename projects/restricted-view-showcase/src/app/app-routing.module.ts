import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictedViewDemoComponent } from './restricted-view-demo.component';

const routes: Routes = [{
  path: '',
  component: RestrictedViewDemoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
