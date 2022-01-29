/**
 * 基础静态类型，number, string, null, undefined, boolean, void, symbol
 */

const n: number = 918;
const myName: string = 'aaa';


/**
 * 对象类型
 */

// 对象
const x: {
  name: string, age: number
} = {
  name: 'abc', age: 9
}

// 字符串数组
const y: string[] = ['a', 'b', 'c'];

const y2: Array<string> = [ 'aa', 'bb', 'cc'];

// 类
class Person { };
const p1: Person = new Person();

// 函数
const f1: () => string // 定义function 必须返回字符串
  = () => { return '1' };



  