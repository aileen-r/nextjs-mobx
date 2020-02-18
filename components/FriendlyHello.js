import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const FriendlyHello = ({ BaseStore }) => {

  useEffect(() => {
    BaseStore.start();
    return () => {
      BaseStore.stop();
    }
  })

  return <h1>{BaseStore.helloMessage}</h1>;
};

export default inject('BaseStore')(observer(FriendlyHello));
