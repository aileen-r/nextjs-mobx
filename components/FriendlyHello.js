import React from 'react';
import { func, shape, string } from 'prop-types';
import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const FriendlyHello = ({ BaseStore }) => {
  useEffect(() => {
    BaseStore.start();
    return () => {
      BaseStore.stop();
    };
  });

  return <h1>{BaseStore.helloMessage}</h1>;
};

FriendlyHello.propTypes = {
  BaseStore: shape({
    helloMessage: string,
    start: func,
    stop: func,
  }),
};

export default inject('BaseStore')(observer(FriendlyHello));
