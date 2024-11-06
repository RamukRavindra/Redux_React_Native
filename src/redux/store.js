import { createStore } from "redux";
import { counterReducer, todoReducer } from "./counterReducer";

// export const store = createStore(counterReducer);

export const todoStore = createStore(todoReducer);