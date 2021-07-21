import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    // 1: {
        // id: 1,
        // title: "wash car",
        // body: "with soap",
        // done: false
    // },
    // 2: {
        // id: 2,
        // title: "wash dog",
        // body: "with shampoo",
        // done: true
    // }
};


const todos_reducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);
    
    switch(action.type){
        case REMOVE_TODO:
            nextState.remove(todo.id)
            return nextState;
        case RECEIVE_TODOS:
            action.todos.forEach((todo)=> {
                nextState[todo.id] = todo;            
            })
            return nextState;
        case RECEIVE_TODO:
            nextState[action.id] = action.todos;
            return nextState;
        default: 
            return state;
    }
};

export default todos_reducer;