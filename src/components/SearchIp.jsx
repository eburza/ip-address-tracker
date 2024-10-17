import { useState } from 'react'
import Icon from '../assets/icon-arrow.svg'

export default function SearchIp({onSearch}) {

    const [ input, setInpum ] = useState('')

    function handleChange(event) {
        setInpum(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSearch(input)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='ip-search'>
                <h1>IP Address Tracker</h1>
            </label>
            <input 
                type='text'
                id='ip-search'
                placeholder='Search for any IP address or domain' 
                onChange={handleChange}
            />

            <button type='submit'>
                <img src={Icon}/>
            </button> 
        </form>
    )
}