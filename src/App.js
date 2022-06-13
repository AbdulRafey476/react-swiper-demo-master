import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Swipers from './components/Swipers/Swipers';

export const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={customHistory}>
      <Route path="/" component={Swipers}></Route>
    </Router>
  )
}
