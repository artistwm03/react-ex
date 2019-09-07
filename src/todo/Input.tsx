import React from 'react'

interface Props {
  handleInputTodo: (contents: string) => void
}

const Input: React.FC<Props> = props => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleInputTodo(event.currentTarget.input.value)
    event.currentTarget.input.value = ""
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="input" placeholder="할 일 입력" />
    </form>
  )
}

export default Input
