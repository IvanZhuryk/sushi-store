import React from 'react'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsOpen } from '../redux/slices/menuSlice'

function Menu() {
    const isOpen = useSelector(state=> state.menuSlice.isOpen)
    const dispatch = useDispatch()
    const setOpen=() => {
        dispatch(setIsOpen(!isOpen))
    }
    return (
        <div className="menu" onClick={()=>setOpen()}>
            <Link to='/'><img src='/logo.png' alt='logo' className='logo'></img></Link>
            <button className="nav-button">
            <CgMenuLeftAlt className='nav-button-icon'></CgMenuLeftAlt>
            <h3 className='nav-button-text'>Меню доставки</h3>
            </button>
        </div>
    )
}

export default Menu