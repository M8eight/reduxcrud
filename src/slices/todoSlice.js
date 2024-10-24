import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    todos: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            return [
                ...state.todos,
                {
                    id: state.todos.length + 1,
                    name: action.payload
                }
            ]
        },
        removeTodo(state, action) {
            return state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;