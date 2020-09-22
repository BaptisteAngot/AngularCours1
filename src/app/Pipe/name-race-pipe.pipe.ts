import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameRacePipe'
})
export class NameRacePipePipe implements PipeTransform {
  //Rouen : R.O.U.E.N
  transform(value: string, ...args: unknown[]): unknown {
    let res:string = "";

    value = value.toUpperCase()
    for (let index = 0; index < value.length; index++){
      res += value[index] + '.'
    }
    return res;
  }

}
