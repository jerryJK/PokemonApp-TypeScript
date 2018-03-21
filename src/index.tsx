import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { App } from './components/App/App';
import { FavoritesPokemons } from './components/FavoritesPokemons/FavoritesPokemons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Reducer } from  './reducers/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/favorites" component={FavoritesPokemons} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
