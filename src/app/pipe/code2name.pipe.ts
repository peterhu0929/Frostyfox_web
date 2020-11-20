import { Pipe, PipeTransform } from '@angular/core';
export enum PipeParm {
  DrinkType = 'DrinkType',
  DrinkSweetness = 'DrinkSweetness'
}
@Pipe({
  name: 'code2name'
})
export class Code2namePipe implements PipeTransform {

  transform(code: any, flag: string): any {
    // let name: any;
    if (flag === PipeParm.DrinkType) {
      switch (code) {
        case 1: return '精選';
        case 2: return '特調';
        case 3: return '牛奶';
        case 4: return '水果';
        case 5: return '無酒精飲料';
        case 6: return '芒果冰';
        case 7: return '雞蛋仔';
        default: return '精選';
      }
    }
    if (flag === PipeParm.DrinkSweetness) {
      if (code === 'true') {
        return '可調甜度';
      } else {
        return '固定甜度';
      }
    }

  }

}

