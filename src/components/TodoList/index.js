import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, updateTask } from '../../ducks/actions/tasksAction'

import {
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableCompleted,
  TableCheck,
  TableDelete,
} from './styles'

const TodoList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => {
    return state.tasks.tasks
  })

  const handleCheked = (task) => {
    dispatch(updateTask(task))
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  try {
    console.log(tasks[0].completed ? 'textBorderTable' : 'textTable')
    console.log(tasks[0].completed ? 'line-through' : 'none')
  } catch (error) {}

  return (
    <Container>
      <Table>
        <TableBody>
          {tasks.map((task, i) => (
            <TableRow key={i}>
              <TableCell>
                {task.completed ? (
                  <>
                    <TableCompleted
                      onClick={() => {
                        handleCheked(task)
                      }}
                    />
                  </>
                ) : (
                  <>
                    <TableCheck
                      onClick={() => {
                        handleCheked(task)
                      }}
                    />
                  </>
                )}
              </TableCell>
              <TableCell
                color={task.completed ? 'textBorderTable' : 'textTable'}
                decoration={task.completed ? 'line-through' : 'none'}
              >
                {task.task}
              </TableCell>
              <TableCell>
                <TableDelete
                  onClick={() => {
                    handleDelete(task.id)
                  }}
                ></TableDelete>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default TodoList
