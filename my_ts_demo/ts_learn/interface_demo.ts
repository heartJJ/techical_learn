interface SquareConfig {
  color?: string; // 可选属性
  readonly width: number; // 只读属性
}
  
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  
  newSquare.area = config.width * config.width;
  return newSquare;
}

// 可跳过类型检查，若直接 createSquare({color: "black", width: 10, other: 'aa'}) 将报错
let paramSquare = {color: "black", width: 10, other: 'aa'};
let mySquare = createSquare(paramSquare);


/**
 *  索引签名
 */

/* 示例1 */
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: string]: Animal;
  // [x: string]: Dog;
}

let myOkay: Array<Animal> = [ new Animal(), new Dog() ];
let okay1: Animal = myOkay[0];
let okay2: Animal = myOkay[1];

/* 示例2 */

// ok
interface Foo {
  [key: string]: number;
  x: number;
  y: number;
}
// Error
interface Bar {
  [key: string]: number;
  x: number;
  // y: string; // Error: y 属性必须为 number 类型
}


/**
 * 混合类型
 */

 interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;