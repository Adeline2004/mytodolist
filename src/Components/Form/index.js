import React, { Component } from 'react'

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
      <div>
        <form
          onSubmit={event => {
            event.preventDefault()
            addNewTask(newTask)
            this.setState({ newTask: '' })
          }}
        >
          <input
            placeholder='Nouvelle tache'
            value={newTask}
            onChange={event => this.handleChange(event)}
          />
          <button type='submit'>+</button>
        </form>
      </div>
    )
  }
}

export default Form
