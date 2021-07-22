import rootReducer from '../reducers/root_reducer';
// by importing rootReducer we get access to all of the dispatch reducer methods/ with just one call root reducer is the router 

import {createStore} from 'redux';

// createStore is a function that maps the rootReducer with the preloadedState, it functions as the database


const configureStore = (preloadedState = {}) => {
    // configure store takes in the initial state as reference
    // and returns a function call to create store and preloaded state// it provides a dynamic mapping point for the entire app 
    return createStore(rootReducer, preloadedState)
}



export default configureStore;
