
async function getIpLocation(ipAddress) {

    try {
        const location = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}=${ipAddress}`)
        const apiLocation = await location.json()
    }
    catch (error) {
        console.log(`error: ${error}`)
    }
}

export { getIpLocation }