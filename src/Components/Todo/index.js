import React from 'react'
import styled from 'styled-components'
// import { Trash } from "react-feather";
import Button from '../Boutton'

const TodoWrapper = styled.div`
  display: flex;
  width: 360px;
  border: 1px solid #d1d5e9;
  justify-content: space-between;
  margin: 2px;
  overflow: auto;
`
const itemWrapper = styled.div`
  display: flex;
`

const Todo = props => (
  <TodoWrapper>
    <itemWrapper>{props.item}</itemWrapper>
    <Button onClick={() => props.deleteItem()}>
      {/* <Trash size={16} /> */}x
    </Button>
  </TodoWrapper>
)

export default Todo
