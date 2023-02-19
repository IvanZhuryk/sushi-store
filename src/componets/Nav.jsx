import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeSort, setSearchSushi } from '../redux/slices/sushiSlice'
import { removeSortPizza } from '../redux/slices/pizzaSlice'
import { removeSortDrinks } from '../redux/slices/drinksSlice'


function Nav() {
    const isOpen = useSelector(state=> state.menuSlice.isOpen)
    const dispatch =useDispatch()
    const handleClearSortSushi = () =>{
        dispatch(removeSort())
    }
    const handleCLeareSortPizza = () => {
        dispatch(removeSortPizza())
    }
    const handleCLeareSortDrinks = () => {
        dispatch(removeSortDrinks())
    }
    const handleClearSerchSushi = () =>{
        dispatch(setSearchSushi(''))
    }
    return (
        isOpen ? 
            <nav className='nav'>
            <Link onClick={handleClearSortSushi}  to='sushi'>
                <div className='nav__item' onClick={handleClearSerchSushi}>
                        <img  className='nav__image' src='/sushi.webp' alt='sushi'></img>
                        <span className='nav__title'>CУШІ</span>
                </div>
            </Link>
            <Link to='sushiSet' >
                <div className='nav__item'>
                    <img  className='nav__image' src='/sushi-set.webp' alt='sushi'></img>
                    <span className='nav__title'>CУШІ СЕТИ</span>
                </div>
            </Link>
            <Link to='piza' onClick={handleCLeareSortPizza}>
                <div className='nav__item'>
                    <img  className='nav__image' src='/piza.webp' alt='sushi'></img>
                    <span className='nav__title'>ПІЦА</span>
                </div>
            </Link>
            <Link to='pizaSet'>
                <div className='nav__item'>
                    <img  className='nav__image' src='/piza-set.webp' alt='sushi'></img>
                    <span className='nav__title'>ПІЦА СЕТИ</span>
                </div>
            </Link>
            <Link to='wok'>
                <div className='nav__item'>
                    <img  className='nav__image' src='/wok.webp' alt='sushi'></img>
                    <span className='nav__title'>WOK</span>
                </div>
            </Link>
            <Link to='selet'>
                <div className='nav__item'>
                    <img  className='nav__image' src='/selet.webp' alt='sushi'></img>
                    <span className='nav__title'>САЛАТИ</span>
                </div>
            </Link>
            <Link to='sneks'>
                <div className='nav__item'>
                    <img  className='nav__image' src='/snek.webp' alt='sushi'></img>
                    <span className='nav__title'>CНЕКИ</span>
                </div>
            </Link>
            <Link to='drinks' onClick={handleCLeareSortDrinks}>
                <div className='nav__item'>
                    <img  className='nav__image' src='/drink.webp' alt='sushi'></img>
                    <span className='nav__title'>НАПОЇ</span>
                </div>
            </Link>
        </nav>:null
    )
}

export default Nav