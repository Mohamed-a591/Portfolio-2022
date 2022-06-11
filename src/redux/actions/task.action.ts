import { ITask } from '../../interfaces/ITask'
import { TaskTypes } from '../constants/task.constants'

export const setTasks = (tasks: ITask) => {
  return {
    type: TaskTypes.SET_TASKS,
    payload: tasks
  }
}

export const selectedTask = (task: ITask) => {
  return {
    type: TaskTypes.SELECTED_TASK,
    payload: task
  }
}

export const removeTask = (task: ITask) => {
  return {
    type: TaskTypes.REMOVESELECTED_TASK,
    payload: task
  }
}
