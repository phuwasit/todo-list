import uuid from 'uuid/v4'

const reducer = (state, action) => {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), title: action.title, completed: false }]
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id)
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, title: action.newTitle } : todo
      )
    default:
      return state;
  }
}

export default reducer