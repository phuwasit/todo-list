import { useState } from 'react'

function useInputState(initialValues) {
  const [state, setState] = useState(initialValues)

  const toggle = () => {
    setState(!state)
  }

  return [state, toggle]
}

export default useInputState