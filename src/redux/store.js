import { configureStore } from '@reduxjs/toolkit'
import sushiSlice from './slices/sushiSlice'
import cartSlice from './slices/cartSlice'
import sushiSetSlice from './slices/sushiSetSlice'
import pizzaSetSlice from './slices/pizzaSetSlice'
import wokSlice from './slices/wokSlice'
import seletSlice from './slices/seletSlice'
import sneksSlice from './slices/sneksSlice'
import pizzaSlice from './slices/pizzaSlice'
import drinksSlice from './slices/drinksSlice'
import menuSlice from './slices/menuSlice'

export const store = configureStore({
    reducer: {
        sushiSlice : sushiSlice,
        cartSlice : cartSlice,
        sushiSetSlice : sushiSetSlice,
        pizzaSetSlice : pizzaSetSlice,
        wokSlice: wokSlice,
        seletSlice:seletSlice,
        sneksSlice:sneksSlice,
        pizzaSlice:pizzaSlice,
        drinksSlice: drinksSlice,
        menuSlice:menuSlice,
        
    },
})