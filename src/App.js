import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { initTasks } from './ducks/actions/tasksAction'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import { Container, TodoContainer } from './styles'
import Header from './components/Header'

const App = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    dispatch(initTasks())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  )
}

export default App
