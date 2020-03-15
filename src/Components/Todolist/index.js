import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTodos } from '../../index'
import Todo from '../Todo'

const TodolistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Todolist = props => {
  const { todos, deleteItem, editItem } = props

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

const mapStateToProps = state => ({ todos: getTodos(state) })

export default connect(mapStateToProps)(Todolist)
