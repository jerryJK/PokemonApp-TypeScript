import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { App } from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { DataReducer } from './reducers/DataReducer';

const store = createStore(DataReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
