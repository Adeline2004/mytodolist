import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './Components/Title'
import Form from './Components/Form'
import Todolist from './Components/Todolist'

import './App.css'

const AppWrapper = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid #ee6e78;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

class App extends Component {
  state = {
    list: []
  }

  addNewItemInList = newTask => {
    const newList = [...this.state.list, newTask]
    this.setState({ list: newList })
  }

  deleteItemInList = index => {
    const newListDelete = [...this.state.list]
    newListDelete.splice(index, 1)
    this.setState({ list: newListDelete })
  }

  editItemInList = (item, index) => {
    const editList = [...this.state.list]
    editList.splice(index, 1, item)
    this.setState({ list: editList })
  }

  render () {
    return (
      <AppWrapper>
        <Title name='Ma Todo liste' />
        <Form />
        <Todolist
          deleteItem={index => this.deleteItemInList(index)}
          editItem={(item, index) => this.editItemInList(item, index)}
        />
      </AppWrapper>
    )
  }
}

export default App
