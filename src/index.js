import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/';

import App from './App';
import PokemonSingle from './components/pokemons/PokemonSingle';
import NotFound from './components/ui/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/page/:page?" component={App} />
          <Route
            path="/pokemon/:pokemonName"
            component={PokemonSingle}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
