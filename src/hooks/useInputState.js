import { useState } from 'react'

function useInputState(initialValues) {
  const [value, setValue] = useState(initialValues)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue("")
  }

  return [value, handleChange, reset]
}

export default useInputState