import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    isOpen: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setIsOpen:(state,action) => {
            state.isOpen = action.payload
        },
    },
})
    export const { setIsOpen} = menuSlice.actions

    export default menuSlice.reducer