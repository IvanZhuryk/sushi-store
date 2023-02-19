import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    sushiSet: [],
}

export const sushiSetSlice = createSlice({
    name: 'sushiSet',
    initialState,
    reducers: {
        addSushiSet:(state,action) => {
            state.sushiSet = action.payload
        },
    },
})
    export const { addSushiSet } = sushiSetSlice.actions

    export default sushiSetSlice.reducer