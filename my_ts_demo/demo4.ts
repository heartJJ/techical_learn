/**
 * 类型注解
 */

let a1: number;
a1 = 123;

/**
 * 类型推断
 */
let a2 = 124;
// a2 = '123'; error
let a3 = a1 + a2;

// 此处无法自动类型推断
function getTotal(one, two) {
  return one + two;
}
let total = getTotal(1, 2); // total: any

// 推断为number
function getTotal2(one: number, two: number) {
  return one + two;
}
let total2 = getTotal2(1, 2); // total: number

