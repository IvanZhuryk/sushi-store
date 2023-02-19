import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchSushi, sortSushi } from '../redux/slices/sushiSlice'
import { addItem } from '../redux/slices/cartSlice'
import CardItem from '../componets/CardItem'
import Search from '../componets/Search'




function Sushi() {
    const categoryes = [
        {name: 'XL ФІЛАДЕЛЬФІЯ', num:0},
        {name: 'ФІЛАДЕЛЬФІЯ', num:1},
        {name: 'XL КАЛІФОРНІЯ', num:2},
        {name: 'КАЛІФОРНІЯ', num:3},
        {name: 'ДРАКОНИ', num:4},
        {name: 'РОЛИ', num:5},
        {name: 'ГАРЯЧІ РОЛИ', num:6},
        {name: 'ФУТУМАКІ', num:7},
        {name: 'МАКІ', num:8},
    ]
    const search = useSelector(state => state.sushiSlice.search)
    const items = useSelector((state) => state.sushiSlice.sushi)
    const [data,setData] = useState(items)
    const dispatch = useDispatch()
    const sort = useSelector((state)=> state.sushiSlice.sorted)
    const handleSort = (num) => {
        dispatch(sortSushi(num))
    }
    const handleAdItemToCart = (obj) => {
        dispatch(addItem(obj))
    }
    const setSearch = (value) => {
        dispatch(setSearchSushi(value))
    }
    const clearSearch = () => {
        dispatch(setSearchSushi(''))
    }
    const filtersItems = (searchStr, list) => {
        if(!searchStr) {
            return list
        }return list.filter((item)=>
            item.title.toLowerCase().includes(searchStr.toLowerCase())
        )
    }
    useEffect(()=>{
        const debounce = setTimeout(()=>{
            const filtredItems = filtersItems(search, items);
            setData(filtredItems)
        },300)
        return()=>clearTimeout(debounce)
    },[search])
    return (
        <>
        <div className='category-sort'>
            {categoryes.map(category=>(
                <button onClick={()=>{handleSort(category.num);clearSearch()}} key={category.name} className='category-sort__button'>{category.name}</button>
            )) }
        </div>
        <h1>СУШІ</h1>
        <Search search={search} setSearch={setSearch}></Search>
        <section className='popular-items'>
            {items.length && !sort.length && !data.length? items.map( item =>(
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            )): !sort.length && data.length? data.map( item =>(
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            )):sort.map( item =>(
                
                <CardItem key={item.id} item={item} handleAdItemToCart={handleAdItemToCart}></CardItem>
            ))}
        </section>
        </>
    )
}

export default Sushi