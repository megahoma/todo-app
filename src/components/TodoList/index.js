import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { swapTask } from '../../ducks/actions/tasksAction'

import Task from './Task'

import { Container, ListTasks } from './styles'

const TodoList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => {
    const tasks = state.tasks.tasks
    const filter = state.tasks.filter.filter((item) => item.active)[0].title

    if ('All' === filter) {
      return tasks
    } else if ('Active' === filter) {
      return tasks.filter((item) => !item.completed)
    } else if ('Completed' === filter) {
      return tasks.filter((item) => item.completed)
    }

    return tasks
  })

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    dispatch(swapTask(items))
  }

  return (
    <>
      <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ListTasks
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => {
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Task task={task} />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ListTasks>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  )
}

export default TodoList
