import React from 'react'
import Menu from './Menu'
import Info from './Info'
import Cart from './Cart'

function Header({setActive,setActiveInfo,setActiveLocation}) {
    return (
    <header className="header">
        <Menu></Menu>
        <Info setAcriveInfo={setActiveInfo} setActiveLocation={setActiveLocation}></Info>
        <Cart setActive={setActive}></Cart>
    </header>
    )
}

export default Header