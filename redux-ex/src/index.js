import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import EmployeeListCount from './components/EmployeeListCount';
import { loadEmployeeData } from './actions/employeeActions';
import { thunk } from 'redux-thunk';

// Traditional Way for creating and using store (in this we are loading all employees by making axios call in the component)
// var appStore = createStore(rootReducer);
// appStore.dispatch(loadEmployeeData());


// below method help us to load all employees to store before rendering component as it loaded from actions only
// so for using the dispatch to run a function we need a middleware i.e "thunk" in our case  (therefore the way of creating store changes to this)
var createStoreWithExtraFeature = applyMiddleware(thunk)(createStore);
var appStore = createStoreWithExtraFeature(rootReducer);

appStore.dispatch(loadEmployeeData());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
        <EmployeeListCount/>
        <App />
    </Provider>
);