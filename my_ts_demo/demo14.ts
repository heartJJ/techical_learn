/**
 * 联合类型和类型保护
 */


interface W1 {
  a: Boolean;
  say: () => {};
};

interface W2 {
  a: Boolean,
  skill: () => {}
}

// 断言
function judge1(p: W1 | W2) {
  p.a ?
    (p as W1).say() : 
    (p as W2).skill()
}

// in
function judge2(p: W1 | W2) {
  'say' in p ?
    p.say() : 
    p.skill()
}

// typeof
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }

  return first + second;
}

// instanceof, 仅作用于类
class NumberObj {
  count: number;
}

function addObj(first: Object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }

  return 0;
}