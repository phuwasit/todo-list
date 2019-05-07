import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultValues) {
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValues)
      )
    } catch (e) {
      value = defaultValues
    }
    return value
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState]
}

export default useLocalStorageState