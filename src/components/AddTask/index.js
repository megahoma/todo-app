import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../../ducks/actions/tasksAction'

import { Container, Button, Input } from './styles'

const AddTask = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleAdding = () => {
    const newTask = {
      task: value,
      completed: false,
    }
    dispatch(addTask(newTask))
    setValue('')
  }

  return (
    <Container>
      <Button onClick={handleAdding} />
      <Input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        placeholder={'Create a new todo…'}
      />
    </Container>
  )
}

export default AddTask
