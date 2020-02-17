import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeuInputComponent } from './modules/seu-input/seu-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SeuInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
