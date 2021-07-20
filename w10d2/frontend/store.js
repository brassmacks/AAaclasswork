import createStore from 'redux';

const store = createStore(reducer,preloadedState);
store.dispatch({
    type: 'ADD_TODO',
    text: 'description'
})
