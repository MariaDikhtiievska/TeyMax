import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './likesSlice'
import ConnectcounterReducer from './ConnectCounterSlice'

export default configureStore({
  reducer: {
    likesCounter: counterReducer,
    connectCounter : ConnectcounterReducer

  }
})