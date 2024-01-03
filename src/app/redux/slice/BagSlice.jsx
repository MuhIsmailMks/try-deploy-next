 import { createSlice } from '@reduxjs/toolkit'

const bagSlice = createSlice({
    name:'bag',
    initialState:{list: [],tatal : 0},
    reducers:{
      addToBag(state,action)  {
        const check = state.list.findIndex(product => product.id === action.payload.id)
        if(check !== -1){
          state.list[index].quantity += action.payload.quantity
        } else {
          state.list.push(action.payload)
        }
      }
    }
})

const {actions,bagReducer} = bagSlice

export const {addToBag} = actions 

export default bagReducer
