import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    drinks: [],
    sorted:[],
}

export const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        addDrinks:(state,action) => {
            state.drinks = action.payload
        },
        sortDrinks:(state,action) =>{
            state.sorted = state.drinks.filter((item) => item.category === action.payload
            )
        },
        removeSortDrinks:(state) =>{
            state.sorted =[];
        }
    },
})
    export const { addDrinks, sortDrinks,removeSortDrinks} = drinksSlice.actions

    export default drinksSlice.reducer