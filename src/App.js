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
  render () {
    return (
      <AppWrapper>
        <Title name='Ma Todo liste' />
        <Form />
        <Todolist />
      </AppWrapper>
    )
  }
}

export default App
