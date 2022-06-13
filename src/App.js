import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Swipers from './components/Swipers/Swipers';

export const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Swipers} />
    </Switch>
  )
}
