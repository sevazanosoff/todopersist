import React from 'react'
import { InputProps } from '../../../types/types'

import cl from './Input.module.scss'

const Input: React.FC<InputProps> = ({ inputHandler, inputHandlerError, changeInput }) => {
    return (
        <input
            className={inputHandlerError ? cl['input-error'] : cl['input']}
            type='text'
            name='text'
            value={inputHandler}
            onChange={changeInput}
            placeholder='Todo title'
        />
    )
}

export default Input
