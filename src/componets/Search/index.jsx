import React from 'react'

function Search({search,setSearch}) {
    return (
        <div>
            <input className='search'
                value={search}
                autoFocus
                type='text'
                autoComplete='off'
                placeholder='пошук...'
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search