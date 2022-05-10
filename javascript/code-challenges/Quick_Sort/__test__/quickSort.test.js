"use strict"
const quickSort = require("../quickSort")


describe('insertion-sort', () => {
    let arrA=[8,4,23,42,16,15];
    let arrB=[20,18,12,8,5,-2];
    let arrC=[2,3,5,7,13,11];
  it('quicksort an array', () => {
    
    expect(quickSort(arrA,0,arrA.length-1)).toEqual( [4,8,15,16,23,42]);
  });
  it('quicksort an array', () => {
    expect(quickSort(arrB,0,arrB.length-1)).toEqual([-2,5,8,12,18,20]);
  });
  it('quicksort an array', () => {
    expect(quickSort(arrC,0,arrC.length-1)).toEqual([2,3,5,7,11,13]);
  });
});