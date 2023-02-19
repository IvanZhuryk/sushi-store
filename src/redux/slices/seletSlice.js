import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    selet: [],
}

export const seletSlice = createSlice({
    name: 'selet',
    initialState,
    reducers: {
        addSelet:(state,action) => {
            state.selet = action.payload
        },
    },
})
    export const { addSelet} = seletSlice.actions



    export default seletSlice.reducer