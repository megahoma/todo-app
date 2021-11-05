import React from 'react'

import { SwitcherIcon } from './styles'

const Switch = ({ toggleTheme }) => {
  return (
    <>
      <SwitcherIcon onClick={toggleTheme} />
    </>
  )
}

export default Switch
