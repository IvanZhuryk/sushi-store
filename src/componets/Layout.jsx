import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { BsPlusCircle } from 'react-icons/bs'
import {SlMinus} from 'react-icons/sl'
import {MdOutlineDeleteForever} from 'react-icons/md'
import { addItem, minusItem, removeCart, removeItem } from '../redux/slices/cartSlice'

function Layout() {
    const cart = useSelector(state => state.cartSlice.cart);
    const dispatch = useDispatch();
    const [modal,setModal]=useState(false)
    const [activeInfo, setActiveInfo] = useState(false)
    const [activeLocation, setActiveLocation] = useState(false)
    const [activeAction, setActiveAction] = useState(false)

    const addMoreItems = (obj) => {
        dispatch(addItem(obj))
    }
    const minusOneItem = (obj) => {
        dispatch(minusItem(obj))
    }
    const removeItems = (obj) => {
        dispatch(removeItem(obj))
    }
    const clearCart = () => {
        dispatch(removeCart())
    }

    return (
        <div className="container">
            <Header setActive={setModal} setActiveInfo={setActiveInfo} setActiveLocation={setActiveLocation}></Header>
            <Nav></Nav>
                <Outlet></Outlet>
            <Footer setActiveInfo={setActiveInfo} setActiveLocation={setActiveLocation} setActiveAction={setActiveAction}></Footer>
            <Modal active={modal} setActive={setModal}>
                <div className='cart-items'>
                    <h2 className='cart-items__title'>Корзина покупок</h2>
                    {cart.length? <button className='cart-items__button' onClick={()=>clearCart()}>Очистити корзину</button>:null}
                    {   
                        cart.length? cart.map(item => (
                            <div key={item.id} className='cart-items__item'>
                                <img className='cart-items__image' src={item.image} alt='cart-item'></img>
                                <p className='cart-items__name'>{item.title}</p>
                                <div className='cart-items__count'>
                                    <BsPlusCircle className='cart-items__plmn' onClick={()=>addMoreItems(item)}></BsPlusCircle>
                                    <span className='cart-items__span'>{item.count}</span>
                                    <SlMinus className='cart-items__plmn' onClick={()=>minusOneItem(item)}></SlMinus>
                                </div>
                                <span className='cart-items__span'>{item.price*item.count} грн.</span>
                                <MdOutlineDeleteForever className='cart-items__plmn' onClick={()=>removeItems(item)}></MdOutlineDeleteForever>
                            </div>
                        )) : <h2>Корзина пуста!</h2>
                    }
                    
                </div>
            </Modal>
            <Modal active={activeInfo} setActive={setActiveInfo}>
                <div className='menu-info'>
                    <h3 className='menu-info__title'>ДОСТАВКА І ОПЛАТА</h3>
                    <span className='menu-info__close' onClick={()=>setActiveInfo(false)}>x</span>
                </div>
                <h3>УМОВИ ДОСТАВКИ</h3>
                <p>Вартість мінімального замовлення у м. Тернопіль </p>
                <ul>
                    <li>Суші – 300 ₴</li>
                    <li>Піца– 300 ₴</li>
                    <li>Спільного – 300 ₴</li>
                </ul>
                <p>Вартість мінімального замовлення у приміській зоні – 400 ₴</p>
                <h3>Спосіб оплати:</h3>
                <ul>
                    <li>Готівкою при отриманні</li>
                    <li>Оплата на сайті Приват24 (LiqPay)</li>
                </ul>
            </Modal>
            <Modal active={activeLocation} setActive={setActiveLocation}>
                <div className='menu-info'>
                    <h3 className='menu-info__title'>АДРЕСИ ЗАКЛАДІВ</h3>
                    <span className='menu-info__close' onClick={()=>setActiveLocation(false)}>x</span>
                </div>
                <ul>
                    <li>Руська 56</li>
                    <li>Руська 56</li>
                    <li>Руська 56</li>
                </ul>
                <h3>СПОСІБ ОПЛАТИ</h3>
                <ul>
                    <li>Готівкою при отриманні</li>
                    <li>Оплата на сайті Приват24 (LiqPay)</li>
                </ul>
            </Modal>
            <Modal active={activeAction} setActive={setActiveAction}>
            <div className='menu-info'>
                    <h3 className='menu-info__title'>ДОСТАВКА І ОПЛАТА</h3>
                    <span className='menu-info__close' onClick={()=>setActiveAction(false)}>x</span>
            </div>
            <h3>Акції на доставку і самовивіз</h3>
            <ul>
                <li>у всі дні діє знижка 10% на самовиніс</li>
                <li>акція понеділка: 39% знижки на кожен другий рол* </li>
                <li>акція вівторка: 39% знижки на кожну другу піцу*</li>
                <li>акція середи: 15% знижки на всі піци при замовленні самовиносу</li>
                <li>акція четверга: 15% знижки на всі роли при замовленні самовиносу</li>
            </ul>
            </Modal>

        </div>
    )
}

export default Layout