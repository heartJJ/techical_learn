// 函数返回类型的注解

function getTotal3(one: number, two: number): number {
  return one + two;
}

function say1() : void { // 无 return 值
  console.log('say 1');
}


function say2() : never { // 方法执行不完
  throw new Error();
  console.log('say 2');
}

function say3({ one, two }: { one: number, two: number }) { // 结构的类型注解
  console.log(`${one}, ${two}`);
}



