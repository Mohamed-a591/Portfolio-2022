import { ProjectsTypes } from '../constants/project.constants'

export const setTasks = (tasks: string) => {
  return {
    type: ProjectsTypes.SET_PROJECT,
    payload: tasks
  }
}

export const selectedTask = (task: string) => {
  return {
    type: ProjectsTypes.SELECTED_PROJECT,
    payload: task
  }
}

export const removeTask = (task: string) => {
  return {
    type: ProjectsTypes.REMOVE_PROJECT,
    payload: task
  }
}
