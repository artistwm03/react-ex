import React from 'react'
import { Todo as Itodo } from './Types'

interface Props extends Itodo {
  handleChangeTodo: (id: number) => void
}

export default function Todo(props: Props) {
  return (
    <div>
      {props.isChecked ?
        (<span>❌</span>) :
        (<span>✔️</span>)
      }
      <span onClick={() => props.handleChangeTodo(props.id)}>{props.contents}</span>
    </div>
  )
}
