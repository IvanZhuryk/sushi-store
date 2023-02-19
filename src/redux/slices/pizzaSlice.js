import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    pizza: [],
    sorted:[],
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addPizza:(state,action) => {
            state.pizza = action.payload
        },
        sortPizza:(state,action) =>{
            state.sorted = state.pizza.filter((item) => item.category === action.payload
            )
        },
        removeSortPizza:(state) =>{
            state.sorted =[];
        }
    },
})
    export const { addPizza, sortPizza,removeSortPizza } = pizzaSlice.actions

    export default pizzaSlice.reducer