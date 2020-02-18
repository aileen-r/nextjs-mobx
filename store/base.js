import { action, observable } from 'mobx';

const messages = [
  'Hello World 👋',
  'Learning some Next 👩‍💻',
  'Running Next since we don\'t have access to FITT yet 🤷‍♀️',
  'Is it Friday yet? 🍷',
];

let store = null;

class Store {
  @observable helloMessage = '';

  constructor(isServer, message) {
    // set message or generate message if no message is there yet)
    this.helloMessage = message
      ? message
      : messages[Math.floor(Math.random() * (messages.length))];
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.helloMessage = messages[Math.floor(Math.random() * (messages.length))];
    }, 10000);
  };

  stop = () => clearInterval(this.timer);
}

export default function initBaseStore(isServer, message) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, message);
  } else {
    if (store === null) {
      store = new Store(isServer, message);
    }
    return store;
  }
}
