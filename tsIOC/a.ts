import { Container } from './container'
import {B} from './b'
const container = new Container();

export class A {
  b:B;
  constructor() {
      this.b = container.get('b');
  }
}