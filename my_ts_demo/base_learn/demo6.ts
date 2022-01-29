/**
 * 数组类型的定义
 */

const mix_arr1: (string | number)[] = [1, 2, '3'];

const undefinedArr: undefined[] = [undefined, null];

// 混合类型
const objectArr: { name: string, age: number }[] = [
  { name: 'abc', age: 10 },
  { name: 'bbc', age: 11 }
];

// 可预选定义type
type p1 = { name: string, age: number };
const objectArr2: p1[] = [
  { name: 'abc', age: 10 },
  { name: 'bbc', age: 11 }
];

// 类的形式定义
class p2 {
  name: string;
  age: number;
}

const objectArr3: p2[] = [
  { name: 'abc', age: 10 },
  { name: 'bbc', age: 11 }
];

// 接口形式
interface p3 {
  name: string;
  age: number;
}

const objectArr4: p3[] = [
  { name: 'abc', age: 10 },
  { name: 'bbc', age: 11 }
];