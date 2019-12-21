import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globals';
import Home from './pages/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
