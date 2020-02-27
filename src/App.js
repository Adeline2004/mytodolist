import React, { Component } from 'react'
import Title from './Components/Title'
import Form from './Components/Form'
import Todolist from './Components/Todolist'

import './App.css'

class App extends Component {
  state = {
    list: []
  }

  addNewItemInList = newTask => {
    const newList = [...this.state.list, newTask]
    this.setState({ list: newList })
  }

  deleteIteminList = index => {
    const newListDelete = [...this.state.list]
    newListDelete.splice(index, 1)
    this.setState({ list: newListDelete })
  }

  render () {
    const { list } = this.state
    return (
      <div>
        <Title name='Ma Todo liste' />
        <Form
          addNewTask={newTask => {
            this.addNewItemInList(newTask)
          }}
        />
        <Todolist
          Todos={list}
          deleteItem={index => this.deleteIteminList(index)}
        />
      </div>
    )
  }
}

export default App
