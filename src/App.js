import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { initTasks } from './ducks/actions/tasksAction'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import FilterTask from './components/FilterTask'
import Footer from './components/Footer'

import GlobalStyle from './styles/global'
import { Container, TodoContainer } from './styles'

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
        <TodoContainer>
          <AddTask />
          <TodoList />
          <FilterTask />
        </TodoContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
