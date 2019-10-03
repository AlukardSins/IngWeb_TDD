import { TestBed, inject } from '@angular/core/testing'

import { RomanNumeralsService } from './roman-numerals.service'
import { Component } from '@angular/core'

describe('RomanNumeralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RomanNumeralsService
      ]
    })
  })

  it(
    'should be created',
    inject(
      [
        RomanNumeralsService
      ],
      (service: RomanNumeralsService) => {
        expect(service).toBeTruthy()
      }
    )
  )

  it('should return biggest unit', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.unitAsigner('1', 1)).toEqual(1)
    expect(service.unitAsigner('1', 2)).toEqual(10)
    expect(service.unitAsigner('1', 3)).toEqual(100)
    expect(service.unitAsigner('1', 4)).toEqual(1000)
  })

  it('should return roman symbols for 1 <= values < 10', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.checkUnits(1)).toEqual('I')
    expect(service.checkUnits(2)).toEqual('II')
    expect(service.checkUnits(3)).toEqual('III')
    expect(service.checkUnits(4)).toEqual('IV')
    expect(service.checkUnits(5)).toEqual('V')
    expect(service.checkUnits(6)).toEqual('VI')
    expect(service.checkUnits(7)).toEqual('VII')
    expect(service.checkUnits(8)).toEqual('VIII')
    expect(service.checkUnits(9)).toEqual('IX')
  })

  it('should return roman symbols for 10 <= values < 100', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.checkTens(10)).toEqual('X')
    expect(service.checkTens(20)).toEqual('XX')
    expect(service.checkTens(30)).toEqual('XXX')
    expect(service.checkTens(40)).toEqual('XL')
    expect(service.checkTens(50)).toEqual('L')
    expect(service.checkTens(60)).toEqual('LX')
    expect(service.checkTens(70)).toEqual('LXX')
    expect(service.checkTens(80)).toEqual('LXXX')
    expect(service.checkTens(90)).toEqual('XC')
  })

  it('should return roman symbols for 100 <= values <= 1000', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.checkHundreds(100)).toEqual('C')
    expect(service.checkHundreds(200)).toEqual('CC')
    expect(service.checkHundreds(300)).toEqual('CCC')
    expect(service.checkHundreds(400)).toEqual('CD')
    expect(service.checkHundreds(500)).toEqual('D')
    expect(service.checkHundreds(600)).toEqual('DC')
    expect(service.checkHundreds(700)).toEqual('DCC')
    expect(service.checkHundreds(800)).toEqual('DCCC')
    expect(service.checkHundreds(900)).toEqual('CM')
    expect(service.checkHundreds(1000)).toEqual('M')
  })

  it('should return any value from 1 to 1999 into its roman equivalent', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(1)).toEqual('I')
    expect(service.arabicToRoman(499)).toEqual('CDXCIX')
    expect(service.arabicToRoman(999)).toEqual('CMXCIX')
    expect(service.arabicToRoman(1499)).toEqual('MCDXCIX')
    expect(service.arabicToRoman(1999)).toEqual('MCMXCIX')
  })
})
