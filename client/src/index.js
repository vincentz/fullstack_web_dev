import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import reduxThunk from 'redux-thunk';
=======
>>>>>>> aa8143f38d3641d2751f571b6e1f3261ad2c1e10

import App from './components/App';
import reducers from './reducers';

<<<<<<< HEAD
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
=======
const store = createStore(reducers, {}, applyMiddleware());
>>>>>>> aa8143f38d3641d2751f571b6e1f3261ad2c1e10

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);