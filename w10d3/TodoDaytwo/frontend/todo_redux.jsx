import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import {root_reducer} from '../frontend/reducers/root_reducer'
import {receive_todos} from './actions/todo_actions'
import {receive_todo} from './actions/todo_actions'
import {remove_todo} from './actions/todo_actions'
// import App from './components/app'
import { Root } from './components/root'
import { allTodos } from "./reducers/selectors"

document.addEventListener('DOMContentLoaded', () =>{
  const store = configureStore();
  window.store = store;
  window.receive_todos = receive_todos;
  window.remove_todo = remove_todo;
  const rootElement = document.getElementById("rootElement")
  ReactDOM.render(<Root store={store} />, rootElement);
  window.allTodos = allTodos;
});

// Test your code - Import the store to your entry file.Create your store by calling configureStore, set window.store = store in your entry file and then call window.store.getState() in your console.Make sure that this function returns the initial application state described above.Don't move on until it does!