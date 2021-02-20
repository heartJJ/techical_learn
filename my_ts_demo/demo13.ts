/**
 * 抽象类
 */

class PP {
  readonly _name: string
  constructor(name: string) {
    this._name = name;
  }

  // error 因只读
  // set name(name: string) {
  //   this._name = 'x' + name;
  // }
}

const ppp1 = new PP('hhh');
console.log(ppp1._name);
// ppp1._name = '11'; // error


abstract class W {
  abstract skill();
}

class BaseW extends W { // 必须实现 skill 方法
  skill() {
    console.log('I am base waiter');
  }
}