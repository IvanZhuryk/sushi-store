import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'
import CardItem from '../componets/CardItem'
import { sortPizza } from '../redux/slices/pizzaSlice'




function Pizza() {
    const categoryes = [
        {name: 'НА ТОМАТАХ', num:0},
        {name: 'НА ВЕРШКОВОМУ СОУСІ', num:1},
    ]
    const items = useSelector((state) => state.pizzaSlice.pizza)
    const dispatch = useDispatch()
    const sort = useSelector((state)=> state.pizzaSlice.sorted)

    const handleSort = (num) => {
        dispatch(sortPizza(num))
    }
    const handleAdItemToCart = (obj) => {
        dispatch(addItem(obj))
    }

    return (
        <>
        <div className='category-sort'>
            {categoryes.map(category=>(
                <button onClick={()=>handleSort(category.num)} key={category.name} className='category-sort__button'>{category.name}</button>
            )) }
        </div>
        <h1>ПІЦА</h1>
        <section className='popular-items'>
            {items.length && !sort.length ? items.map( item =>(
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            )): sort.map( item =>(
                
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            )) }
        </section>
        </>
    )
}

export default Pizza