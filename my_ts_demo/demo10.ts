/**
 * 类的返回类型  private , protected, public
 */

class Pperson {
  name: string // 默认  public
  // private age: number; // 私有
  protected sex: string // 保护
}

const pp = new Pperson();
pp.name = 'bob';
// pp.age = 10; // error
// pp.sex = 'B'; // error
console.log(pp.name);

class Pp1 extends Pperson {
  sex = 'aa'; // 可在子类中使用
  sayHello() {
    console.log(this.sex); 
  }
}

const pp1 = new Pp1();
pp1.sayHello()