import React from 'react'
import styled from 'styled-components'
import Todo from '../Todo'

const TodolistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Todolist = props => {
  const { todos, deleteItem, editItem } = props
  console.log('render:', todos)
  return (
    <TodolistWrapper>
      {todos.map((item, index) => (
        <Todo
          key={`todo-${item}-${index}`}
          item={item}
          deleteItem={() => deleteItem(index)}
          editItem={item => editItem(item, index)}
        />
      ))}
    </TodolistWrapper>
  )
}

export default Todolist
