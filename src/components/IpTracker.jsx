export default function IpTracker() {

    async function getIpLocation() {
        try {
            const location = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_rsZO7bbhWXBRXWG4jqswASBoq9Cl3&ipAddress=8.8.8.8')
            const apiLocation = await location.json()
            console.log(`location: ${apiLocation.location.country}`)
        }
        catch (error) {
            console.log(`error: ${error}`)

        }
    }

    getIpLocation()

    return(
        <>
            <h1>ip tracker</h1>
        </>
    )
}