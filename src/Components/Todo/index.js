import React from 'react'

const Todo = props => (
  <div>
    {props.item}
    <button onClick={() => props.deleteItem()}>x</button>
  </div>
)

export default Todo
