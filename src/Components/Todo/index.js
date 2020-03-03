import React, { Component } from 'react'
import styled from 'styled-components'
import { Trash } from 'react-feather'
import { Edit } from 'react-feather'
import Button from '../Boutton'
import Input from '../Input'

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

class Todo extends Component {
  state = {
    item: '',
    statut: true
  }

  editItem = () => {
    const newStatut = this.state.statut
    this.setState({ statut: !newStatut })
  }

  itemInchange = event => {
    this.setState({ item: event.target.value })
  }

  render () {
    const { deleteItem, item } = this.props
    const { statut } = this.state
    return (
      <TodoWrapper>
        <itemWrapper>
          {statut ? (
            item
          ) : (
            <Input value={item} onChange={event => this.itemInchange(event)} />
          )}
        </itemWrapper>
        <div>
          <Button onClick={() => this.editItem()}>
            <Edit size={16} />
          </Button>
          <Button onClick={() => deleteItem()}>
            <Trash size={16} />
          </Button>
        </div>
      </TodoWrapper>
    )
  }
}

export default Todo
