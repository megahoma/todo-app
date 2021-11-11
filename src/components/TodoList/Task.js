import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../../ducks/actions/tasksAction'

import {
  TaskContainer,
  ButtonCompleted,
  ButtonCheck,
  TextTask,
  ButtonDelete,
} from './styles'

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleCheked = (task) => {
    dispatch(updateTask(task))
  }
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <TaskContainer>
      {task.completed ? (
        <ButtonCompleted
          onClick={() => {
            handleCheked(task)
          }}
        />
      ) : (
        <ButtonCheck
          onClick={() => {
            handleCheked(task)
          }}
        />
      )}

      <TextTask
        color={task.completed ? 'textBorderTable' : 'textTable'}
        decoration={task.completed ? 'line-through' : 'none'}
      >
        {task.task}
      </TextTask>

      <ButtonDelete
        onClick={() => {
          handleDelete(task.id)
        }}
      />
    </TaskContainer>
  )
}

export default Task
