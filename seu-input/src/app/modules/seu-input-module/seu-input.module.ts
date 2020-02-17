import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeuInputComponent } from '../seu-input/seu-input.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [
      SeuInputComponent
  ],
  exports: [
    SeuInputComponent
  ]
})
export default class SeuInputModule { }
