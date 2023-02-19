import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    sneks: [],
}

export const sneksSlice = createSlice({
    name: 'sneks',
    initialState,
    reducers: {
        addSneks:(state,action) => {
            state.sneks = action.payload
        },
    },
})
    export const { addSneks } = sneksSlice.actions


    export default sneksSlice.reducer