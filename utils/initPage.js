import { Provider } from 'mobx-react';
import initStore from '~/store';
import withLayout from './withLayout';

const initPage = Page => {
  const PageComponent = ({ helloMessage, isServer }) => {
    const store = initStore(isServer, helloMessage);
    const Layout = withLayout(Page);
    return (
      <Provider BaseStore={store}>
        <main>
          <Layout />
        </main>
      </Provider>
    );
  };

  PageComponent.getInitialProps = ({ req }) => {
    const isServer = !!req; // check if we are on the server
    const store = initStore(isServer); // initialize the store
    return { helloMessage: store.helloMessage, isServer }; // pass the initial values down as props
  };

  return PageComponent;
};

export default initPage;
