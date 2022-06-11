import { ProjectsTypes } from '../constants/project.constants'

const initialState = {
  Projects: [
    {
      id: 1,
      title: 'Project',
      category: 'Coding'
    }
  ]
}

export const projectsReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: object }
) => {
  switch (type) {
    case ProjectsTypes.SET_PROJECT:
      return state
    default:
      return state
  }
}
