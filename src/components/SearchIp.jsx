import Icon from '../assets/icon-arrow.svg'

export default function SearchIp() {
    return(
        <>
            <label for="ip-search">
                <h1>IP Address Tracker</h1>
            </label>
            <input type="search" id="ip-search" name="q" placeholder="Search for any IP address or domain" />

            <button>
                <img src={Icon}/>
            </button> 
        </>
    )
}