import React from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { checkedTodo } from '../../../redux/todo/todoSlice'
import { CheckboxProps } from '../../../types/types'

import cl from './Checkbox.module.scss'

const TodoCheckbox: React.FC<CheckboxProps> = ({ todo, i }) => {
    const dispatch = useAppDispatch()

    return (
        <form className={cl['checkbox']} >
            <label className={cl['checkbox__label']} onClick={() => dispatch(checkedTodo(i))}>Mark a task as completed </label>
            <input
                className={cl['checkbox__input']}
                type='checkbox'
                onChange={() => dispatch(checkedTodo(i))}
                checked={todo.completed}
            />
        </form>
    )
}

export default TodoCheckbox
