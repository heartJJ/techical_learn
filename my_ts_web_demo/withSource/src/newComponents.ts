  export class NewHeader {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'this is new Header';
      document.body.appendChild(elem);
    }
  }
