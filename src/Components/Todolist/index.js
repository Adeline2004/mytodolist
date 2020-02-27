import React from 'react'
import Todo from '../Todo'

const Todolist = props => {
  const { Todos, deleteItem } = props
  return (
    <div>
      {Todos.map((item, index) => (
        <Todo item={item} deleteItem={() => deleteItem(index)} />
      ))}
    </div>
  )
}

export default Todolist
