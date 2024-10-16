import Icon from '../assets/icon-arrow.svg'

export default function SearchIp({onGetSearchValue, searchInput}) {

    function handleChange(event) {
        onGetSearchValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`search for: ${searchInput}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="ip-search">
                <h1>IP Address Tracker</h1>
            </label>
            <input 
                type="search" 
                id="ip-search" 
                name="q" 
                placeholder="Search for any IP address or domain" 
                onChange={handleChange}
            />

            <button type='submit'>
                <img src={Icon}/>
            </button> 
        </form>
    )
}