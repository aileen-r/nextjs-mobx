import { Provider } from 'mobx-react';
import { initAuthStore, initBaseStore } from '~/store';
import withLayout from './withLayout';

const initPage = Page => {
  const PageComponent = ({ helloMessage, isServer }) => {
    const baseStore = initBaseStore(isServer, helloMessage)
    const authStore = initAuthStore(isServer)
    const Layout = withLayout(Page);
    return (
      <Provider BaseStore={baseStore} AuthStore={authStore}>
        <main>
          <Layout />
        </main>
      </Provider>
    );
  };

  PageComponent.getInitialProps = ({ req }) => {
    const isServer = !!req; // check if we are on the server
    const baseStore = initBaseStore(isServer); // initialize the store
    return { helloMessage: baseStore.helloMessage, isServer }; // pass the initial values down as props
  };

  return PageComponent;
};

export default initPage;
