import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Favoris from './components/pages/Favoris';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favoris" component={Favoris} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
export default App;
