/**
 * 泛型
 */

function addObj1<T>(first: T, second: T) {
  return `${first}${second}`;
}

addObj1<string>('1', '2'); // 使用时指定类型


function join1<T>(p: T[]) { // 泛型数组
  return p.join(';')
}

function join2<T>(p: Array<T>) { // 泛型数组
  return p.join(';')
}

join1<string>(['1', '2']); 


function addObj2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

addObj2<string, number>('1', 2);
addObj2('1', 2); // 类型推断
