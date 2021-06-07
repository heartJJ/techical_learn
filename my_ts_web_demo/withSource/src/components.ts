namespace Components {
  export namespace SubComponents {
    export class Test {
      constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'this is Test';
        document.body.appendChild(elem);
      }
    }
  }

  export class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'this is Header';
      document.body.appendChild(elem);
    }
  }
  
  export class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'this is Content';
      document.body.appendChild(elem);
    }
  }
  
  export class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'this is Footer';
      document.body.appendChild(elem);
    }
  }

}