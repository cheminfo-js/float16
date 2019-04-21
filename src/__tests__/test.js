'use strict';

const { byteToFloat16, float16ToByte } = require('..');

describe('float16', () => {
  it('byteToFloat16', () => {
    expect(byteToFloat16(0x3c00)).toBe(1);
    expect(byteToFloat16(0xc000)).toBe(-2);
    expect(byteToFloat16(0x7bff)).toBe(6.5504e4); // max half precision
    expect(byteToFloat16(0x0400)).toBe(2 ** -14); // minimum positive normal;
    expect(byteToFloat16(0x0001)).toBe(2 ** -24); // minimum strictly positive subnormal
    expect(byteToFloat16(0x0000)).toBe(0);
    expect(byteToFloat16(0x8000)).toBe(-0);
    expect(byteToFloat16(0x7c00)).toBe(Infinity);
    expect(byteToFloat16(0xfc00)).toBe(-Infinity);
    expect(byteToFloat16(0x3555)).toBe(0.333251953125); // 1/3
    expect(byteToFloat16(0x7c01)).toBe(NaN);
  });

  it('float16ToByte', () => {
    expect(float16ToByte(1)).toBe(0x3c00);
    expect(float16ToByte(-2)).toBe(0xc000);
    expect(float16ToByte(6.5504e4)).toBe(0x7bff); // max half precision
    expect(float16ToByte(2 ** -14)).toBe(0x0400); // minimum positive normal;
    expect(float16ToByte(2 ** -24)).toBe(0x0001); // minimum strictly positive subnormal
    expect(float16ToByte(0)).toBe(0x0000);
    expect(float16ToByte(-0)).toBe(0x8000);
    expect(float16ToByte(Infinity)).toBe(0x7c00);
    expect(float16ToByte(-Infinity)).toBe(0xfc00);
    expect(float16ToByte(1 / 3)).toBe(0x3555); // 1/3
    expect(float16ToByte(NaN)).toBe(0x7c01);
  });
});
