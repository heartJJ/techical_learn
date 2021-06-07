import { NewHeader } from './newComponents';


export default class Page {
  constructor() {
    new NewHeader();
    new Components.Header();
    new Components.Content();
    new Components.SubComponents.Test();
    new Components.Footer();
  }
}



