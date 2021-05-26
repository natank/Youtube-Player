import {configureStore} from '@reduxjs/toolkit'

import countersReducer from '../features/counters/countersSlice'

export default configureStore({
  reducer: {
    counters: countersReducer
  }
})