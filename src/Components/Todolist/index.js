import React from 'react'
import styled from 'styled-components'
import Todo from '../Todo'

const TodolistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Todolist = props => {
  const { Todos, deleteItem } = props
  return (
    <TodolistWrapper>
      {Todos.map((item, index) => (
        <Todo item={item} deleteItem={() => deleteItem(index)} />
      ))}
    </TodolistWrapper>
  )
}

export default Todolist
