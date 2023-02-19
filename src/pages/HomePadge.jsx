import React from 'react'
import CardItem from '../componets/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'

function HomePadge() {
    const sneks = useSelector(state => state.sneksSlice.sneks)
    const pizza = useSelector(state => state.pizzaSlice.pizza)
    const sushi = useSelector(state => state.sushiSlice.sushi)
    const dispatch = useDispatch()
    const handleAdItemToCart = (obj) => {
        dispatch(addItem(obj))
    }
    
    return (
        <>
        <h3 className='popular-title'>НАЙЧАСТІШЕ ЗАМОВЛЯЮТЬ</h3>
        <section className='popular-items'>
            {sneks.length && pizza.length && sushi.length ?  
            <>
            <CardItem item={sneks[1]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={pizza[1]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sushi[1]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sneks[2]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={pizza[2]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sushi[2]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sneks[3]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={pizza[3]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sushi[3]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            <CardItem item={sneks[4]} handleAdItemToCart={handleAdItemToCart}></CardItem>
            </>:null
            }
           
        </section>
        </>
    )
}

export default HomePadge