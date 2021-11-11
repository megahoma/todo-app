import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, filterUpdate } from '../../ducks/actions/tasksAction'

import {
  Container,
  CounterItems,
  ButtonClear,
  DesctopPanel,
  MobilPanel,
  ButtonMobile,
} from './styles'

const FilterTask = () => {
  const dispatch = useDispatch()

  const tasks = useSelector((state) => {
    return state.tasks.tasks.filter((tasks) => !tasks.completed).length
  })

  const filter = useSelector((state) => state.tasks.filter)

  return (
    <Container>
      <DesctopPanel>
        <CounterItems>{tasks} items left</CounterItems>
        <ButtonClear
          onClick={() => {
            dispatch(clearCompleted())
          }}
        >
          Clear Completed
        </ButtonClear>
      </DesctopPanel>

      <MobilPanel>
        {filter.map((item, i) => (
          <ButtonMobile
            color={item.active ? 'primary' : 'textBorderTable'}
            onClick={() => {
              dispatch(filterUpdate(item.title))
            }}
            key={i}
          >
            {item.title}
          </ButtonMobile>
        ))}
      </MobilPanel>
    </Container>
  )
}

export default FilterTask
