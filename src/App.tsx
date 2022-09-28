import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchTodos } from "./redux/todo/asyncActions";
import { addTodo } from "./redux/todo/todoSlice";

import RequestError from './components/RequestError'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Loading from "./components/ui/Loading/Loading";
// import Select from "./components/ui/MySelect/MySelect";


import cl from './styles/App.module.scss'
import { newTodoProps } from "./types/types";


const App: React.FC = () => {
  const [inputHandler, setInputHandler] = React.useState<string>('')
  const [inputHandlerError, setInputHandlerError] = React.useState<boolean>(false)
  // const [limit, setLimit] = React.useState<number>(5)


  const dispatch = useAppDispatch()
  const { todos, isLoading, error } = useAppSelector(state => state.todo)

  React.useEffect(() => {
    fetchTodos(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
  }, [])

  // React.useEffect(() => {
  //   fetchTodos(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
  // }, [limit])

  // const options = [
  //   { value: 5, label: '5' },
  //   { value: 10, label: '10' },
  //   { value: -1, label: 'Все' },
  // ]


  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHandler(e.target.value)
    setInputHandlerError(false)
  }

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (inputHandler === '') return setInputHandlerError(true)
    const newTodo: newTodoProps = {
      userId: 1,
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title: inputHandler,
      completed: false
    }
    dispatch(addTodo(newTodo))
    setInputHandler('')
  }

  return (
    <div className={cl['todo']}>
      <div className={cl['wrapper']}>
        <TodoForm inputHandler={inputHandler} inputHandlerError={inputHandlerError} changeInput={changeInput} onSubmit={onSubmit} />
        {/* <Select options={options} setLimit={setLimit} /> */}
        {error
          ?
          <RequestError error={error} />
          :
          isLoading ? <Loading /> : <TodoList todos={todos} />
        }
      </div>
    </div>
  );
};

export default App








