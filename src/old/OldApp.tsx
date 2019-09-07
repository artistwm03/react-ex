import React, { Component, Fragment } from 'react'
import Todo from './Todo'
import Input from './Input'
import { Todo as Itodo } from './Types'

interface Props {
}

interface State {
  todos: Array<Itodo>
}

let id = 0

export default class OldApp extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)

    this.state = {
      todos: []
    }

    this.handleInputTodo = this.handleInputTodo.bind(this)
    this.handleChangeTodo = this.handleChangeTodo.bind(this)
  }

  handleInputTodo(contents: string) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    this.setState({ todos: this.state.todos.concat({ id: id++, contents: contents, isChecked: false }) })

    // //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // this.setState({ todos: [...this.state.todos, { contents: contents, isChecked: false }] })
  }

  handleChangeTodo(id: number) {
    const newTodos = [...this.state.todos]
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const selectedIndex = this.state.todos.findIndex(todo => todo.id === id)
    newTodos[selectedIndex] = {
      ...this.state.todos[selectedIndex],
      isChecked: !this.state.todos[selectedIndex].isChecked
    }
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Todo App</h1>
        <Input handleInputTodo={this.handleInputTodo} />
        {/* 
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
        */}
        <p>✔️할일</p>
        {this.state.todos
          .filter(todo => !todo.isChecked)
          .map((todo, index) =>
            <Todo
              id={todo.id}
              contents={todo.contents}
              isChecked={todo.isChecked}
              handleChangeTodo={this.handleChangeTodo}
              key={index}
            />
          )}
        <p>❌한일</p>
        {this.state.todos
          .filter(todo => todo.isChecked)
          .map((todo, index) =>
            <Todo
              id={todo.id}
              contents={todo.contents}
              isChecked={todo.isChecked}
              handleChangeTodo={this.handleChangeTodo}
              key={index}
            />
          )}
      </Fragment>
    )
  }
}
