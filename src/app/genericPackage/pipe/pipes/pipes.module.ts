import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformTypePipe } from './transform-type.pipe';
import { TransformIntensityPipe } from './transform-intensity.pipe';



@NgModule({
  declarations: [TransformTypePipe, TransformIntensityPipe],
  imports: [
  ],
  exports: [TransformTypePipe, TransformIntensityPipe],
})
export class PipesModule { }
