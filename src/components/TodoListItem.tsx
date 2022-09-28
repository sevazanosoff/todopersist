import React from 'react'
import { TodoListItemProps } from '../types/types'
import { useAppDispatch } from '../redux/hooks'
import { deleteTodo } from '../redux/todo/todoSlice'

import Checkbox from './ui/Checkbox/Checkbox'

import cl from '../styles/TodoListItem.module.scss'

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, i }) => {
    const dispatch = useAppDispatch()


    return (
        <li className={cl['list__item']}>
            <div className={cl['list__item-wrapper']}>
                <div className={cl['list__item-block']}>
                    <p className={cl['list__item-title']}><span>{i + 1}</span>. {todo.title}</p>
                    <Checkbox todo={todo} i={i} />
                </div>
                <div className={cl['list__item-block']}>
                    <button className={cl['list__item-delete']} onClick={() => dispatch(deleteTodo(todo.id))}>Delete todo</button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
