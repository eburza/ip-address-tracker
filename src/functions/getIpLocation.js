
async function getIpLocation(ipAddress) {

    try {
        const location = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}=${ipAddress}`)
        const apiLocation = await location.json()

        if (!response.ok) {
            throw new Error('Failed to fetch IP data')
        }

        return apiLocation
    }

    catch (error) {
        console.log(`error: ${error}`)
        throw error
    }
}

export { getIpLocation }