import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.BROWSE}>
          {/* <Browse /> */}
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          {/* <SignIn /> */}
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          {/* <SignUp /> */}
        </Route>
        <Route exact path={ROUTES.HOME}></Route>
      </Routes>
      <Home />
    </Router>
  );
}
