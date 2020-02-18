import { Provider } from 'mobx-react';
import initStore from '../store';
import FriendlyHello from '../components/FriendlyHello';

const HomePage = () => {
  const store = initStore();
  return (
    <Provider BaseStore={store}>
      <FriendlyHello />
    </Provider>
  );
};

export default HomePage;
