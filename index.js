import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStoreHook } from 'react-redux';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules'
import reportWebVitals from './reportWebVitals';

const store = createStoreHook(rootReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();