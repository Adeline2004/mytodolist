import React, { Component } from 'react'
import { Plus } from 'react-feather'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '../Boutton'
import Input from '../Input'
import { addTodo } from '../../index'

const FormWrapper = styled.div`
  color: #ee6e78;
  font-size: 32px;
  font-family: Raleway;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
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
          <InputWrapper>
            <Input
              placeholder='Nouvelle tache'
              value={newTask}
              onChange={event => this.handleChange(event)}
            />
            <Button type='submit'>
              <Plus size={16} />
            </Button>
          </InputWrapper>
        </form>
      </FormWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewTask: newTask => addTodo(newTask)(dispatch)
})

export default connect(
  state => ({}),
  mapDispatchToProps
)(Form)
