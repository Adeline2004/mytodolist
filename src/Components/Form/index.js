import React, { Component } from 'react'
import { Plus } from 'react-feather'
import styled from 'styled-components'
import Button from '../Boutton'
import Input from '../Input'

const FormWrapper = styled.div`
  color: #ee6e78;
  font-size: 32px;
  font-family: Raleway;
  display: flex;
  justify-content: center;
`

class Form extends Component {
  state = {
    newTask: ''
  }

  handleChange = event => {
    this.setState({ newTask: event.target.value })
  }

  render () {
    const { addNewTask } = this.props
    const { newTask } = this.state
    return (
      <FormWrapper>
        <form
          onSubmit={event => {
            event.preventDefault()
            newTask === ''
              ? alert('Veuillez entrer une tache')
              : addNewTask(newTask)
            this.setState({ newTask: '' })
          }}
        >
          <Input
            placeholder='Nouvelle tache'
            value={newTask}
            onChange={event => this.handleChange(event)}
          />
          <Button type='submit'>
            <Plus size={16} />
          </Button>
        </form>
      </FormWrapper>
    )
  }
}

export default Form
