import { action, observable } from 'mobx';
const messages = [
  'Hello World 👋',
  'Learning some Next 👩‍💻',
  'Running Next since we don\'t have access to FITT yet 🤷‍♀️',
  'Is it Friday yet? 🍷',
];

// let store = null;

class Store {
  @observable helloMessage = '';

  constructor() {
    this.helloMessage = messages[Math.floor(Math.random() * (messages.length - 1))];
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.helloMessage = messages[Math.floor(Math.random() * (messages.length - 1))];
    }, 10000);
  };

  stop = () => clearInterval(this.timer);
}

export default function initStore() {
  return new Store();
}
