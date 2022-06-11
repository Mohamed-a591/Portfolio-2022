import { combineReducers } from 'redux'
import { projectsReducer } from './project.reducer'
import { taskReducer } from './task.reducer'

const data = {
  allTasks: taskReducer,
  allProjects: projectsReducer
}

const Reducers = combineReducers(data)

export default Reducers
