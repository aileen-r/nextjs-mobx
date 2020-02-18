import { Provider } from 'mobx-react';
import Link from 'next/link';

import initStore from '../store';
import FriendlyHello from '../components/FriendlyHello';

const HomePage = ({ helloMessage, isServer }) => {
  const store = initStore(isServer, helloMessage);
  return (
    <Provider BaseStore={store}>
      <nav>
        <Link href="/about">
          <a title="About Page">About</a>
        </Link>
      </nav>
      <FriendlyHello />
    </Provider>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  const isServer = !!req; // check if we are on the server
  const store = initStore(isServer); // initialize the store
  return { helloMessage: store.helloMessage, isServer }; // pass the initial values down as props
};

export default HomePage;
