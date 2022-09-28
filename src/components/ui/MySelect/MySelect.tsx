import React from 'react'
import { SelectProps } from '../../../types/types'

import cl from './Select.module.scss'

const Select: React.FC<SelectProps> = ({ options, setLimit }) => {

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(+e.target.value)
    }

    return (
        <div className={cl['select']}>
            <label htmlFor='select'>Выберите количество данных</label>
            <select id='select'
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectHandler(e)}
            >
                {options.map((option, i) => (
                    <option
                        key={option.value + i}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
