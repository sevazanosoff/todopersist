import React from 'react'
import { TodoListProps } from '../types/types'
import { Todo } from '../redux/todo/types'

import TodoListItem from './TodoListItem'

import cl from '../styles/TodoList.module.scss'

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    return (
        <ul className={cl['list']}>
            {todos.map((todo: Todo, i: number) => (
                <TodoListItem key={i} todo={todo} i={i} />
            ))}
        </ul>
    )
}

export default TodoList
