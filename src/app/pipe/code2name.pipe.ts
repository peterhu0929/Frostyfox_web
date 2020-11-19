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
    let name: any;
    if (flag === PipeParm.DrinkType) {
      switch (code) {
        case 1: name = '精選'; return name;
        case 2: name = '牛奶'; return name;
        case 3: name = '特調'; return name;
        case 4: name = '水果特調 '; return name;
        case 5: name = '無酒精飲料 '; return name;
        case 6: name = '芒果冰'; return name;
        case 7: name = '雞蛋仔'; return name;
        default: return '精選';
      }
    }
    if (flag === PipeParm.DrinkSweetness) {
      if (code) {
        return '可調甜度';
      } else {
        return '固定甜度';
      }
    }

  }

}

