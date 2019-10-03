import { Injectable } from '@angular/core'
import { concat } from 'rxjs'
import { DecimalPipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {
  symbols = [
    'I', // 0
    'V', // 1
    'X', // 2
    'L', // 3
    'C', // 4
    'D', // 5
    'M' // 6
  ]

  constructor () {}

  /*
    unitAsigner
      input:  Number
      output: Number
      Outputs leftmost side value with corresponding units
  */

  unitAsigner (num: string, units: number): number {
    return parseInt(num) * Math.pow(10, units - 1)
  }

  /*
    valueToRoman
      input:  Number
      output: String
      Turns input value to roman symbols
  */

  valueToRoman (input: number): string {
    let romaniced = ''

    if (input < 10) {
      romaniced = this.checkUnits(input)
    } else if (input < 100) {
      romaniced = this.checkTens(input)
    } else if (input <= 1000) {
      romaniced = this.checkHundreds(input)
    }

    return romaniced
  }

  /*
    checkUnits
      input:  Number
      output: String
      Turns input value < 10 to roman equivalent
  */

  checkUnits (input: number): string {
    let romanicedUnits = ''
    let overSymbol = this.symbols[2] //X
    let mainSymbol = this.symbols[1] //V
    let underSymbol = this.symbols[0] //I
    if (input < 4) {
      for (let index = 0; index < input; index++) {
        romanicedUnits = romanicedUnits.concat(underSymbol)
      }
    } else if (input < 9) {
      if (input == 4) {
        romanicedUnits = underSymbol.concat(mainSymbol)
      } else {
        romanicedUnits = mainSymbol
        for (let index = 0; index < input - 5; index++) {
          romanicedUnits = romanicedUnits.concat(underSymbol)
        }
      }
    } else if (input == 9) {
      romanicedUnits = underSymbol.concat(overSymbol)
    }

    return romanicedUnits
  }

  /*
    checkTens
      input:  Number
      output: String
      Turns input value < 100 to roman equivalent
  */

  checkTens (input: number): string {
    let romanicedTens = ''
    let overSymbol = this.symbols[4] //C
    let mainSymbol = this.symbols[3] //L
    let underSymbol = this.symbols[2] //X

    input = input / 10
    if (input < 4) {
      for (let index = 0; index < input; index++) {
        romanicedTens = romanicedTens.concat(underSymbol)
      }
    } else if (input < 9) {
      if (input == 4) {
        romanicedTens = underSymbol.concat(mainSymbol)
      } else {
        romanicedTens = mainSymbol
        for (let index = 0; index < input - 5; index++) {
          romanicedTens = romanicedTens.concat(underSymbol)
        }
      }
    } else if (input == 9) {
      romanicedTens = underSymbol.concat(overSymbol)
    }

    return romanicedTens
  }

  /*
    checkTens
      input:  Number
      output: String
      Turns input value <= 1000 to roman equivalent
  */

  checkHundreds (input: number): string {
    let romanicedHundreds = ''
    let overSymbol = this.symbols[6] //M
    let mainSymbol = this.symbols[5] //D
    let underSymbol = this.symbols[4] //C

    input = input / 100
    if (input < 4) {
      for (let index = 0; index < input; index++) {
        romanicedHundreds = romanicedHundreds.concat(underSymbol)
      }
    } else if (input < 9) {
      if (input == 4) {
        romanicedHundreds = underSymbol.concat(mainSymbol)
      } else {
        romanicedHundreds = mainSymbol
        for (let index = 0; index < input - 5; index++) {
          romanicedHundreds = romanicedHundreds.concat(underSymbol)
        }
      }
    } else if (input == 9) {
      romanicedHundreds = underSymbol.concat(overSymbol)
    } else if (input == 10) {
      romanicedHundreds = overSymbol
    }
    return romanicedHundreds
  }

  /*
    arabicToRoman
      input:  Number
      output: String
      Turns any arabic number from 1 - 1999 to its roman equivalent
  */

  arabicToRoman (arabic: number): string {
    let roman = ''
    let sArabic = arabic.toString().split('')
    let fullLenght = sArabic.length
    let units = sArabic.length
    let nextUnit = sArabic.shift()

    for (let index = 0; index < fullLenght; index++) {
      roman = roman.concat(this.valueToRoman(this.unitAsigner(nextUnit, units)))

      units = sArabic.length
      nextUnit = sArabic.shift()
    }

    return roman
  }
}
