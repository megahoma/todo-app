import React from 'react'

import Switch from '../Switch'
import { Container, Title } from './styles'

const Header = ({ toggleTheme }) => {
  return (
    <>
      <Container>
        <Title>T O D O</Title>
        <Switch toggleTheme={toggleTheme} />
      </Container>
    </>
  )
}

export default Header
