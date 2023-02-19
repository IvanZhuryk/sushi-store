import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'

function CardItem({item, handleAdItemToCart}) {
    const [hover,setHover] = useState(false)
    const onHover = () => {
        setHover(true)
    }
    const offHover = () => {
        setHover(false)
    }

    return (
        <div key={item.id} className='popular-items__item'>
            <FiInfo onMouseEnter={onHover} onMouseLeave={offHover} className='popular-items__icon' ></FiInfo>
            {item.components && hover? <p className='popular-items__components'>{item.components}</p>: hover? <p className='popular-items__components'>{item.title}</p>:null}
            <img className='popular-items__image' src={item.image} alt='sushi'></img>
            <h4 className='popular-items__title'>{item.title}</h4>
            <div className='popular-items__info'>
                <span className='popular-items__size'>{item.size} г./</span>
                <span className='popular-items__price'>{item.price} грн.</span>
            </div>
            <button onClick={()=>handleAdItemToCart(item)} className='popular-items__button'>в Корзину</button>
        </div>
    )
}

export default CardItem