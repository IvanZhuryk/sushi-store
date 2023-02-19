import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    wok: [],
}

export const wokSlice = createSlice({
    name: 'wok',
    initialState,
    reducers: {
        addwok:(state,action) => {
            state.wok = action.payload
        },
    },
})
    export const { addwok } = wokSlice.actions


    export default wokSlice.reducer