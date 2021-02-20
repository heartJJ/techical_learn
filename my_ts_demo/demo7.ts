/**
 * 元组，可适应于csv数据源
 */

const mix_arr2: (string | number)[] = [1, 2, '3']; // 数组，可调换元素顺序。类型注解不变

const mix_arr3: [string, string, number] = ['1','2',3]; // 元组，每项元素必须符合要求, 且长度有要求


const double_arr: [string, string, number][] = [
  ['1', '2', 3],
  ['4', '5', 6]
]