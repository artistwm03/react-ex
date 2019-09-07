import React, { Fragment, useState } from 'react'
import Todo from './Todo'
import Input from './Input'
import { Todo as Itodo } from './Types'

let id = 0

const NewApp: React.FC = () => {
  const initial: Array<Itodo> = []
  const [todos, setTodos] = useState(initial)

  const handleInputTodo = (contents: string) => {
    setTodos(todos.concat({
      id: id++,
      contents: contents,
      isChecked: false
    }))
  }

  const handleChangeTodo = (id: number) => {
    const newTodos = [...todos]
    const selectedIndex = todos.findIndex(todo => todo.id === id)
    newTodos[selectedIndex] = {
      ...todos[selectedIndex],
      isChecked: !todos[selectedIndex].isChecked
    }
    setTodos(newTodos)
  }
  return (
    <Fragment>
      <h1>Todo App</h1>
      <Input handleInputTodo={handleInputTodo} />

      <p>✔️할일</p>
      {todos.filter(todo => !todo.isChecked)
        .map(todo =>
          <Todo
            todo={todo}
            handleChangeTodo={handleChangeTodo}
          />
        )}
      <p>❌한일</p>
      {todos.filter(todo => todo.isChecked)
        .map(todo =>
          <Todo
            todo={todo}
            handleChangeTodo={handleChangeTodo}
          />
        )}
    </Fragment>
  )
}

export default NewApp
