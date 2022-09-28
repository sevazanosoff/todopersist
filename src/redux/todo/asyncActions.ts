
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Todo } from "./types"
import axios from "axios"

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async (url: string, thunkAPI) => {
        try {
            const response = await axios.get<Array<Todo>>(url)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при отправке запроса. Попробуйте перезагрузить страницу')
        }
    }
)

