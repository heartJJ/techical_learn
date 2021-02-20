/**
 * 泛型，类
 */

interface Girl {
  name: string
}

class Choose<T extends Girl> {
  constructor(private girls: T[]) {};

  getGirls(i: number): string {
    return this.girls[i].name;
  } 
}

const c1 = new Choose<Girl>([ {name: 'aa'}, {name: 'bb'} ]);
console.log(c1.getGirls(1));


class Choose1<T extends string | number> { // 约束泛型必须是 string 或 number
  constructor(private girls: T[]) {};

  getGirls(i: number): T {
    return this.girls[i];
  } 
}

const c2 = new Choose1<string>(['aa', 'bb' ]);
console.log(c2.getGirls(1));