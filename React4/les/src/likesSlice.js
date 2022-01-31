import { createSlice } from '@reduxjs/toolkit'
import source from './source.json'


//action creators 
export const counterSlice = createSlice({
  name: 'likesCounter',
  initialState: {
    value: source
  },
  reducers: {

    update:(state,action)=> {state.value=state.value.map(item => {
      console.log(action.payload)
      if (item.id === action.payload.id) {
        console.log( {
          ...item,
          likes: action.payload.liked ? item.likes - 1 : item.likes + 1

      })
          return {
              ...item,
              likes: action.payload.liked ? item.likes - 1 : item.likes + 1

          }
      }
      return item
  })},
    increment: (state, action) => {
      state.value = action.payload
      console.log(state.value)
     state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,update } = counterSlice.actions

export default counterSlice.reducer