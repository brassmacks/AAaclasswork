export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receive_todos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});

const receive_todo = (todo) => ({
    type: RECEIVE_TODO,
    todo
});

