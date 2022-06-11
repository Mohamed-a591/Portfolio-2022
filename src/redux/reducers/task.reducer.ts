import { ITask } from '../../interfaces/ITask'
import { TaskTypes } from '../constants/task.constants'

const initialState: ITask[] = [
  {
    id: 1,
    title: 'Code',
    category: 'Task'
  }
]

export const taskReducer = (
  state: ITask[] = initialState,
  { type, payload }: { type: string; payload: object }
) => {
  switch (type) {
    case TaskTypes.SET_TASKS:
      return state
    default:
      return state
  }
}
