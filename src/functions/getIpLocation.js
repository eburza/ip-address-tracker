async function getIpLocation(ipAddress) {
    try {
        const response = await fetch(`https://ipwho.is/${ipAddress}`)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const apiLocation = await response.json()
        console.log(apiLocation) 
        return apiLocation

    } catch (error) {
        console.error(`Error fetching IP data: ${error.message}`)
        throw error
    }
}

export { getIpLocation }