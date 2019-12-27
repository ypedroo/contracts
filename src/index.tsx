import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import index from './store/reducers/index';

import rootSaga from './store/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    index,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const action = (type:any) => store.dispatch({ type })

ReactDOM.render(<Provider store={store}> <App /> </Provider>, 
    document.getElementById('root'));
