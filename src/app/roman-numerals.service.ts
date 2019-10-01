import { Injectable } from '@angular/core';
import { concat } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {
  symbols = ['I','V','X','L','C','D','M']

  constructor() { }

  arabicToRoman(arabic: number): String {
    let roman = ''
    let units = arabic.toString().length

    if (arabic <= 3) {
      for (let index = 0; index < arabic; index++) {
        roman = roman.concat(this.symbols[0])
      }
    } else if (arabic >= 4 && arabic <= 8){
      if (arabic == 4) {
        roman = 'I'.concat(this.symbols[1])
      } else {
        roman = this.symbols[1]
        for (let index = 0; index < arabic-5; index++) {
          roman = roman.concat(this.symbols[0])
        }
      }
    } else if (arabic >= 9 && arabic <= 13) {
      if (arabic == 9) {
        roman = 'IX'
      } else {
        roman = 'X'
        for (let index = 0; index < arabic-10; index++) {
          roman = roman.concat('I')
        }
      }
    }
    /*
    if (arabic == 4) {
      roman = 'IV'
    } else {
      for (let index = 0; index < arabic; index++) {
        roman = roman.concat('I')
      }
    }
    */
    
    return roman;
  }
}
