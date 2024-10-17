import { useCallback, useState } from 'react'
import IpContext from './functions/Context'
import Map from './components/Map'
import IpTrackerDetails from './components/IpTrackerDetails'
import SearchIp from './components/SearchIp'
import { getIpLocation } from './functions/getIpLocation'

export default function App() {

  const [ ipData, setIpData ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onGetSearchValue = useCallback( async (ipAddress) => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await getIpLocation(ipAddress || null)
      setIpData(data)
    }
    catch (error) {
      setError(error.message)
    }
    finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <IpContext.Provider value={{ipData, isLoading, error}}>
      <SearchIp 
        onSearch={onGetSearchValue} 
      />
      <IpTrackerDetails />
      <Map />
    </IpContext.Provider>
  )
}
