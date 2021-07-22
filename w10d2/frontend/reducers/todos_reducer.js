import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
// we pull in relevant methods that we defined in the the actions folder 





const todos_reducer = (state = {}, action) => {
    // the reducer takes in a state and an action
    // both objects, one referencing the initial state of the component being modified, and the action we wish to perform on it
    Object.freeze(state);
    // before modification, we freeze state preventing any changes being made within this scope,

    let nextState = Object.assign({},state);
    // Assin nextState = {}, with the value of current state
    
    switch(action.type){
        
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        case RECEIVE_TODOS:
            action.todos.forEach((todo)=> {
                nextState[todo.id] = todo;            
            });
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        default: 
            return state;
    }
};

export default todos_reducer;