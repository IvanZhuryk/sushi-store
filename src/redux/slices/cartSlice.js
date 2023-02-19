import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [],
    totalPrice:0,
    totalCount:0,
    
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state,action) => {

            const findItem = state.cart.find(obj => obj.title === action.payload.title);
            if (findItem) {
                findItem.count++;
            }else{
                state.cart.push({...action.payload, count: 1});
            }
            state.totalPrice = state.cart.reduce((sum,obj)=>{
                return obj.price * obj.count + sum;
            },0);
            state.totalCount = state.cart.reduce((sum,obj)=>{
                return obj.count + sum;
            },0);
        },
        minusItem:(state,action) => {
            const findItem = state.cart.find(obj => obj.title === action.payload.title);
            if(findItem.count > 1) {
                findItem.count--;
            } else{
                state.cart = state.cart.filter((obj)=> obj.id !==action.payload.id)
            }
            state.totalPrice = state.cart.reduce((sum,obj)=>{
                return obj.price * obj.count + sum;
            },0);
            state.totalCount = state.cart.reduce((sum,obj)=>{
                return obj.count + sum;
            },0);
        },
        removeItem:(state,action)=>{
            state.cart = state.cart.filter((obj)=> obj.id !==action.payload.id);
            state.totalPrice = state.cart.reduce((sum,obj)=>{
                return obj.price * obj.count + sum;
            },0);
            state.totalCount = state.cart.reduce((sum,obj)=>{
                return obj.count + sum;
            },0);
        },
        removeCart:(state) =>{
            state.cart =[];
            state.totalPrice = state.cart.reduce((sum,obj)=>{
                return obj.price * obj.count + sum;
            },0);
            state.totalCount = state.cart.reduce((sum,obj)=>{
                return obj.count + sum;
            },0);
        },
    },
})
    export const { addItem, minusItem, removeItem, removeCart } = cartSlice.actions

    export default cartSlice.reducer