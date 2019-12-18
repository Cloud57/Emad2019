import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class UiComponentsModule { }
