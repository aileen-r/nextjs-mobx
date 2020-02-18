import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const imgStyles = {
  display: 'block',
  marginTop: 15,
}

const Avatar = ({ AuthStore }) => {
  const user = AuthStore && AuthStore.user;
  const photoUrl = (user && user.photoURL) || 'https://placedog.net/100/100';
  const signInWithGoogle = AuthStore && AuthStore.signInWithGoogle;
  const signOut = AuthStore && AuthStore.signOut;
  return (
    <div>
      {user ? <img src={photoUrl} style={imgStyles}/> : null}
      {user ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signInWithGoogle()}>Login</button>
      )}
    </div>
  );
};

export default inject('AuthStore')(observer(Avatar));
