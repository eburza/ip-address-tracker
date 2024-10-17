async function getIpLocation(value) {
    try {
        const location = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_rsZO7bbhWXBRXWG4jqswASBoq9Cl3&ipAddress=${value}`)
        const apiLocation = await location.json()
        console.log(`location: ${apiLocation.location.country}`)
    }
    catch (error) {
        console.log(`error: ${error}`)

    }
}

export { getIpLocation }