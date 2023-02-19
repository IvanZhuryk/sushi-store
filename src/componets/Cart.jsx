import React from 'react'
import { TbPaperBag } from 'react-icons/tb'
import { useSelector } from 'react-redux'

function Cart({setActive}) {
    const {totalPrice, totalCount} = useSelector(state => state.cartSlice);
    return (
        <div className="cart" onClick={()=>setActive(true)}>
            <div className='cart__info'>
                <p className='cart__items-count'>{totalCount} шт.</p>
                <p className='cart__items-price'>{totalPrice} грн.</p>
            </div>
            <TbPaperBag className='bag'></TbPaperBag>
        </div>
    )
}

export default Cart