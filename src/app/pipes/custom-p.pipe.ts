import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customP'
})
export class CustomPPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value !== null) {
      return value.substr(0, 10) + "see more....";
    }
    return null;
  }

}
