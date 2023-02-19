import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../componets/CardItem'
import { addItem } from '../redux/slices/cartSlice';

function Sneks() {
    const items = useSelector(state => state.sneksSlice.sneks);
    const dispatch = useDispatch();
    const handleAdItemToCart = (obj) => {
        dispatch(addItem(obj))
    }
    return (
        <>
        <h1>СНЕКИ</h1>
        <section className='popular-items'>
            {items.length  ? items.map( item =>(
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            )): null }
        </section>
        </>
    )
}

export default Sneks