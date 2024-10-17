import { useContext } from 'react'
import IpContext from '../functions/Context'
import DetailsElement from './DetailsElement'

export default function IpTrackerDetails() {
    const { ipData, isLoading, error } = useContext(IpContext)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return(
        ipData ? 
        <div>
            <DetailsElement 
                dataName='IP Address'
                dataInfo={ipData.ip}
            />
            <DetailsElement 
                dataName='Location'
                dataInfo={`${ipData.city}, ${ipData.country}`}
            />
            <DetailsElement 
                dataName='Timezone'
                dataInfo={ipData.timezone.utc}
            />
            <DetailsElement 
                dataName='ISP'
                dataInfo={ipData.connection.isp}
            />
        </div> :
        <div>Enter an IP address to see details</div>
    )
}