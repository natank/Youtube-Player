import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'

const initialState = [{id: '1', value: 0}, {id: '2', value: 0}]

const countersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    counterIncremented:{
      reducer(state, action){
        const {id} = action.payload;
        const counter = state.find(item => item.id === id)
        if(counter) counter.value++
      },
      prepare({id}){
        return {
          payload: {id}
        }
      }
    },
    counterDecremented(state, action){
      const {id} = action.payload;
      const counter = state.find(item => item.id === id)
      if(counter) counter.value--
    }
  }
})

export const {counterIncremented, counterDecremented} = countersSlice.actions;

export default countersSlice.reducer;