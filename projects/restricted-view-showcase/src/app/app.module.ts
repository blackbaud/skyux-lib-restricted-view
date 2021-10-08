import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SkyThemeService
} from '@skyux/theme';

import { SkyRestrictedViewModule } from 'projects/restricted-view/src/public-api';

import { RestrictedViewDemoComponent } from './restricted-view-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    RestrictedViewDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyRestrictedViewModule
  ],
  providers: [
    SkyThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
