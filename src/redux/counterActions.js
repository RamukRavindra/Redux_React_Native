export const incrementCounter = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrementCounter = () => {
    return {
        type: 'DECREMENT'
    };
};

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    };
};