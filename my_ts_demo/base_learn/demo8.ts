/**
 * 接口： 仅在开发过程中有限制，编译成JS后接口不存在
 * 
 * interface 传值必须为对象  type 可直接定义为基础类型
 */

interface person {
  name: string,
  age: number,
  sex?: string, // ？ 代表可选
  [propname: string]: any, // propname 任意key
  say(): string
}

const filter = (p: person) => {
  if (p.age > 10) {
    p.sex ?
      console.log(`${p.name} 符合要求，是${p.sex}，他说${p.say()}`) :
      console.log(`${p.name} 符合要求`);
    
    Object.keys(p).forEach(k => {
      if (!['age', 'sex', 'name'].includes(k)) {
        console.log(`属性[${k}], 值为: ${p[k]}`)
      }
    });

  } else {
    console.log(`${p.name} 不符合要求`);
  }
    
};

// p 受 person 限制
const p = {
  name: 'abc',
  age: 12,
  sex: '男性',
  a: 'a',
  b: 'b',
  say(): string {
    return 'hello'
  }
}

filter(p);

// class 实现接口，受限制
class c_p1 implements person {
  name: 'abc';
  age: 12;
  sex: '男性';
  a: 'a';
  b: 'b';
  say(): string {
    return 'hello'
  }
}

// 接口继承接口
interface n_person extends person {
  say2(): string;
};

// c_p2 需满足 person ，也需满足 n_person
class c_p2 implements n_person {
  name: 'abc';
  age: 12;
  sex: '男性';
  say(): string {
    return 'hello'
  };
  say2(): string {
    return 'hello 2'
  }
}