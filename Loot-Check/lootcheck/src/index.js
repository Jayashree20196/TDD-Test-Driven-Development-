import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import  {Provider} from 'react-redux';
import rootReducer from './reducers/balance';
import App from './Components/App';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
    );