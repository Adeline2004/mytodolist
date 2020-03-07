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
const ItemWrapper = styled.div`
  display: flex;
`

class Todo extends Component {
  state = {
    item: this.props.item,
    statut: true
  }

  editItem = () => {
    const newStatut = this.state.statut
    this.setState({ statut: !newStatut })
  }

  onChangeItem = event => {
    this.setState({ item: event.target.value })
  }

  render () {
    const { deleteItem, editItem } = this.props
    const { statut, item } = this.state
    console.log('render:', item)
    return (
      <TodoWrapper>
        <ItemWrapper>
          {statut ? (
            item
          ) : (
            <Input value={item} onChange={event => this.onChangeItem(event)} />
          )}
        </ItemWrapper>
        <div>
          <Button
            onClick={() => {
              this.editItem()
              editItem(item)
            }}
          >
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
