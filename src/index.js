import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './fonts/Raleway-Regular.ttf'

const reducer = (state = { todos: ['test1', 'test2'] }, action) => {
  const { type, payload } = action
  console.log(type, payload)
  switch (type) {
    case 'ADD_TODO':
      const newState = { ...state }
      newState.todos = [...newState.todos, payload.todo]
      return newState
    default:
      return state
  }
}

export const getTodos = state => state.todos

export const addTodo = todo => dispatch =>
  dispatch({ type: 'ADD_TODO', payload: { todo } })

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
