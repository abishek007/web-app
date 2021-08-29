// Module Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail'

/**
 * @description Mapped the routes(URL) with the different components
*/

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
};

export default Routes