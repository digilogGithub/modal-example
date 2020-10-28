import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ConfigMainViewComponent} from './config-main-view/config-main-view.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ConfigMainViewComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
