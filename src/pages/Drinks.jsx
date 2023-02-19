import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'
import CardItem from '../componets/CardItem'
import { sortDrinks } from '../redux/slices/drinksSlice'





function Drinks() {
    const categoryes = [
        {name: 'ФІРМОВІ ЛИСОНАДИ', num:0},
        {name: 'ВОДА', num:1},
        {name: 'СОКИ', num:2},
        {name: 'Б/А ПИВО', num:3},
    ]
    const items = useSelector((state) => state.drinksSlice.drinks)
    const dispatch = useDispatch()
    const sort = useSelector((state)=> state.drinksSlice.sorted)

    const handleSort = (num) => {
        dispatch(sortDrinks(num))
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
        <h1>НАПОЇ</h1>
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

export default Drinks