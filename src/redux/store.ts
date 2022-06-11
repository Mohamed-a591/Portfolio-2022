import { configureStore } from '@reduxjs/toolkit'
import Reducers from './reducers/index.reducer'

const Store = configureStore({
  reducer: Reducers,
  devTools: true
})

export default Store
