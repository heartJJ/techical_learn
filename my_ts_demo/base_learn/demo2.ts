/* 静态类型 */

let count: number = 1;  // count 拥有number类型的属性和方法

// 定义接口 t1
interface t1 {
  uname: string,
  age: number,
}

const new_t: t1 = {
  uname: 'first t1', age: 10
}


interface getList {
  total: number,
  list: Array<t1>
}

const new_g: getList = {
  total: 10,
  list: [
    {
      uname: 'aa', age: 10
    }
  ]
}