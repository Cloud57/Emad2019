import { Pipe, PipeTransform } from '@angular/core';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';
@Pipe({
  name: 'transformIntensity'
})
export class TransformIntensityPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Problem_behaviour.INTENSITY_BEHAVIOR[Number(value-1)];
  }

}
