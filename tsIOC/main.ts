import { Container } from './container';
import { A } from './a';
import { B } from './b';


// main.ts
const container = new Container();
container.bind('a', A, []);
container.bind('b', B, [10]);

// 从容器中取出a
const a = container.get('a');
console.log(a); // A => { b: B { p: 10 } }