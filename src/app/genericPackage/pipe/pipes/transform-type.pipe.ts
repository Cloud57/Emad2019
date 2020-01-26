import { Pipe, PipeTransform } from '@angular/core';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Pipe({
  name: 'transformType'
})
export class TransformTypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return Problem_behaviour.TYPE_BEHAVIOR[value];
  }

}