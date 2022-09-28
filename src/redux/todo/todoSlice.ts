import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, todoState } from './types'
import { fetchTodos } from './asyncActions'

const initialState: todoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        checkedTodo(state, action: PayloadAction<number>) {
            const currentTodo = state.todos[action.payload]
            currentTodo.completed = !currentTodo.completed
        }
    },
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action: PayloadAction<Array<Todo>>) => {
            state.isLoading = false
            state.error = ''
            state.todos = action.payload
        },
        [fetchTodos.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { addTodo, deleteTodo, checkedTodo } = counterSlice.actions

export default counterSlice.reducer