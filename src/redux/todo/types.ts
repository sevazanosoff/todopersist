export type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface todoState {
    todos: Array<Todo>
    isLoading: boolean
    error: string
}
