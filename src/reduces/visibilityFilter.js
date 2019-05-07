import * as types from '../constants/types'

const visibilityFilter = (state, actions) => {
  switch (actions.type) {
    case types.SET_VISIBLITY_FILTER:
      return actions.payload
    default:
      return state
  }
}

export default visibilityFilter