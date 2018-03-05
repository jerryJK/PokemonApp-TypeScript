import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { DataReducer } from './reducers/DataReducer';
import thunk from 'redux-thunk';

const store = createStore(DataReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
