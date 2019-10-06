import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import index from './reducers/index';

import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    index,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
