import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    pizzaSet: [],
}

export const pizzaSetSlice = createSlice({
    name: 'pizzaSet',
    initialState,
    reducers: {
        addPizzaSet:(state,action) => {
            state.pizzaSet = action.payload
        },
    },
})
    export const { addPizzaSet } = pizzaSetSlice.actions


    export default pizzaSetSlice.reducer