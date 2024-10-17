import { useContext } from 'react'
import IpContext from '../functions/Context'
import DetailsElement from './DetailsElement'

export default function IpTrackerDetails() {
    const { ipData, isLoading, error } = useContext(IpContext)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return(
        <div className='display-ip-data'>
            <DetailsElement 
                dataName='IP Address'
                dataInfo={ipData ? ipData.ip : ''}
            />
            <DetailsElement 
                dataName='Location'
                dataInfo={ipData ? `${ipData.city}, ${ipData.country}` : ''}
            />
            <DetailsElement 
                dataName='Timezone'
                dataInfo={ipData ? ipData.timezone.utc : ''}
            />
            <DetailsElement 
                dataName='ISP'
                dataInfo={ipData ? ipData.connection.isp : ''}
            />
        </div>
    )
}