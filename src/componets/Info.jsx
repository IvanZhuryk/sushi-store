import React from 'react'
import { BsClock, BsTelephoneFill } from 'react-icons/bs'
import { FiInfo } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

function Info({setAcriveInfo, setActiveLocation}) {
    return (
        <div className="info">
            <div className="info__item">
                <BsClock className='info__icon'></BsClock>
                <span className='info__span'>10:00 - 21:30</span>
            </div>
            <div className="info__item" onClick={()=>setAcriveInfo(true)}>
                <GoLocation className='info__icon'></GoLocation>
                <span className='info__span'>Інформація</span>
            </div>
            <div className="info__item" onClick={()=>setActiveLocation(true)}>
                <FiInfo className='info__icon'></FiInfo>
                <span className='info__span'>Точки видачі</span>
            </div>
            <div className="info__item">
                <BsTelephoneFill className='info__icon'></BsTelephoneFill>
                <span className='info__span'><a href="tel:+38 666 66 66 666">+38 666 66 66 666</a></span>
            </div>
        </div>
    )
}

export default Info