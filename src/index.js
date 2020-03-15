import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './fonts/Raleway-Regular.ttf'

const reducer = (state = { todos: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TODO': {
      const newState = { ...state }
      newState.todos = [...newState.todos, payload.todo]
      return newState
    }
    case 'EDIT_TODO': {
      const newState = { ...state }
      newState.todos = [...newState.todos]
      newState.todos.splice(payload.index, 1, payload.item)
      return newState
    }
    case 'DELETE_TODO': {
      const newState = { ...state }
      newState.todos = [...newState.todos]
      newState.todos.splice(payload.index, 1)
      return newState
    }
    default:
      return state
  }
}

export const getTodos = state => state.todos

export const addTodo = todo => dispatch =>
  dispatch({ type: 'ADD_TODO', payload: { todo } })

export const editTodo = (item, index) => dispatch =>
  dispatch({ type: 'EDIT_TODO', payload: { item, index } })

export const deleteTodo = index => dispatch =>
  dispatch({ type: 'DELETE_TODO', payload: { index } })

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
