import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    sushi: [],
    sorted:[],
    search:'',
}

export const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {
        addSushi:(state,action) => {
            state.sushi = action.payload
        },
        sortSushi:(state,action) =>{
            state.sorted = state.sushi.filter((item) => item.category === action.payload
            )
        },
        removeSort:(state) =>{
            state.sorted =[];
        },
        setSearchSushi:(state,action)=>{
            state.search =action.payload
        }
    },
})
    export const { addSushi, sortSushi, removeSort,setSearchSushi } = sushiSlice.actions

    export default sushiSlice.reducer