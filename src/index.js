import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';
// import { firebase } from './lib/firebase.prod';

render(
  <React.Fragment>
    <FirebaseContext.Provider value={''}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.Fragment>,
  document.getElementById('root')
);
