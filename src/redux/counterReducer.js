const initialState = {
    count: 0,
    todos: [],
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload }],
            };
        case 'DELETE_TODO': ;
            return {
                ...state, todos: state.todos.filter((todoItem) => todoItem.id !== action.payload)
            };
        default:
            return state;
    }
};