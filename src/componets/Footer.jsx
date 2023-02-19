import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer({setActiveInfo, setActiveLocation, setActiveAction}) {
    return (
        <footer className='footer'>
            <Link to='/'><img src='/logo.png' alt='logo' className='footer__logo'></img></Link>
            <div className='footer__phone'>
                <span className='footer__contacts'><a href="tel:+38 666 66 66 666">+38 666 66 66 666</a></span>
                <span className='footer__contacts'><a href='tel:+38 666 66 66 666'>+38 666 66 66 666</a></span>
            </div>
            <div className='footer__social'>
                <BsFacebook className='footer__social-icons'></BsFacebook>
                <Link to='https://www.instagram.com/zhuryk.ivan/'><BsInstagram className='footer__social-icons'></BsInstagram></Link>
            </div>
            <div>
                <span className='footer__info' onClick={()=>setActiveAction(true)}>АКЦІЇ</span>
                <span className='footer__info' onClick={()=>setActiveInfo(true)}>ДОСТАВКА</span>
                <span className='footer__info' onClick={()=>setActiveLocation(true)}>ТОЧКИ ВИДАЧІ ТА ПОВЕРНЕННЯ</span>
            </div>
        </footer>
    )
}

export default Footer