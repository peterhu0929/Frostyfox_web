import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Code2namePipe } from './code2name.pipe';



@NgModule({
  declarations: [Code2namePipe],
  imports: [
    CommonModule
  ],
  exports: [
    Code2namePipe
  ]
})
export class PipeModule { }
