import { TestBed, inject } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';
import { Component } from '@angular/core';

describe('RomanNumeralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RomanNumeralsService]
    });
  });

  it('should be created', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return roman numerals for 1-3 ', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(1)).toEqual('I');
    expect(service.arabicToRoman(2)).toEqual('II');
    expect(service.arabicToRoman(3)).toEqual('III');
  });

  it('should return "IV" on "4"', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(4)).toEqual('IV');
  });

  it('should return roman numerals for 5-8', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(5)).toEqual('V');
    expect(service.arabicToRoman(6)).toEqual('VI');
    expect(service.arabicToRoman(7)).toEqual('VII');
    expect(service.arabicToRoman(8)).toEqual('VIII');
  });

  it('should return "IX" on "9"', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(9)).toEqual('IX');
  });

  it('should return roman numerals for 10-13', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService)
    expect(service.arabicToRoman(10)).toEqual('X');
    expect(service.arabicToRoman(11)).toEqual('XI');
    expect(service.arabicToRoman(12)).toEqual('XII');
    expect(service.arabicToRoman(13)).toEqual('XIII');
  });
});
