import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name:"counter",
    initialState:{count:1},
    reducers:{
        increment: (state)=> {
            state.count = state.count +1
        },
        decrement: (state)=> {
            state.count = state.count - 1
        },
        reset: (state)=> {
            state.count =0
        },
        increaseByvalue: (state,action)=> {
            state.count =state.count + action.payload
        }
    }
})
export const {increment,decrement,reset,increaseByvalue} = counterSlice.actions
export default counterSlice.reducer