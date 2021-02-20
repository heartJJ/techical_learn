/**
 * 类，get , set, static
 */

class X {
  constructor(private _name: string) { }
  
  get name() {
    return this._name.substr(1);
  }

  set name(name: string) {
    this._name = 'x' + name;
  }

  static sayHello() {
    console.log('hhhhh');
  }
}

const x1 = new X('aa');
console.log(x1.name);
x1.name = 'b';
console.log(x1.name);

X.sayHello();
