import React, { Component } from 'react'

interface Props {
  handleInputTodo: (contents: string) => void
}

export default class Input extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.handleInputTodo(event.currentTarget.input.value)
    event.currentTarget.input.value = ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="input" placeholder="할 일 입력" />
      </form>
    )
  }
}
