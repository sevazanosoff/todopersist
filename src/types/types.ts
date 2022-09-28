// Types

import { Todo } from "../redux/todo/types"

export type newTodoProps = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export type RequestErrorProps = {
    error: string
}

export type TodoFormProps = {
    inputHandler: string
    inputHandlerError: boolean
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void
    onSubmit(e: React.MouseEvent<HTMLButtonElement>): void
}

export type TodoListProps = {
    todos: Todo[]
}

export type TodoListItemProps = {
    todo: Todo
    i: number
}

export type CheckboxProps = TodoListItemProps

export type InputProps = {
    inputHandler: string
    inputHandlerError: boolean
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void
}

export type SelectProps = {
    options: {
        value: number
        label: string
    }[]
    setLimit(num: number): void
}