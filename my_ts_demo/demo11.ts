/**
 * 类，构造函数
 */

class Pperson1 {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 等价上述代码
  constructor(public name: string) {} // public 不可省略
}

const pp1_0 = new Pperson1('aa');
console.log(pp1_0.name);

class Pp1_1 extends Pperson1 {
  constructor(public age: number) {
    super('child'); // 必须调用父类的构造函数
  }
}

const pp1_1 = new Pp1_1(18);
console.log(pp1_1.name, pp1_1.age);
