import React from 'react'
import { TodoFormProps } from '../types/types'

import Input from './ui/Input/Input'

import cl from '../styles/TodoForm.module.scss'

const TodoForm: React.FC<TodoFormProps> = ({ inputHandler, inputHandlerError, changeInput, onSubmit }) => {
    return (
        <form className={cl['todo__form']}>
            <Input inputHandler={inputHandler} inputHandlerError={inputHandlerError} changeInput={changeInput} />
            <button
                className={cl['button']}
                type='submit'
                onClick={onSubmit}
            >Add todo</button>
        </form>
    )
}

export default TodoForm
