import { configureStore } from "@reduxjs/toolkit";
import '../features/todos/todosSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})