import React, {useState} from 'react'

function useActive() {
    const [active, setActive] = useState(false)
  return [
    active,
    onClick
  ]
}

export default useActive