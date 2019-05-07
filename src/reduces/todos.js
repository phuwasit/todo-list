import uuid from 'uuid/v4'
import * as types from '../constants/types'

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, { id: uuid(), title: action.title, completed: false }]
    case types.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, title: action.newTitle } : todo
      )
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case types.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default reducer