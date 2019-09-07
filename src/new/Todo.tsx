import React from 'react'
import { Todo as Itodo } from './Types'

interface Props {
  handleChangeTodo: (id: number) => void
  todo: Itodo
}

const Todo: React.FC<Props> = props => {
  return (
    <div>
      {props.todo.isChecked ?
        (<span>❌</span>) :
        (<span>✔️</span>)
      }
      <span onClick={() => props.handleChangeTodo(props.todo.id)}>{props.todo.contents}</span>
    </div>
  )
}

export default Todo
