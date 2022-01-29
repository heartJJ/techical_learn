/**
 * 类，基础
 */

class Lady {
  content = 'Hi, boy';
  sayHello() {
    return this.content;
  }
}

const l = new Lady();
console.log(l.sayHello());
 
// 继承
class L1 extends Lady {
  sayHello() {
    return super.sayHello(); // 调用父类
  }
}

const l1 = new L1();
console.log(l1.sayHello());
 