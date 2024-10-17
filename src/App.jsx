import { useCallback, useState } from 'react'
import IpContext from './functions/Context'
import Map from './components/Map'
import IpTrackerDetails from './components/IpTrackerDetails'
import SearchIp from './components/SearchIp'
import { getIpLocation } from './functions/getIpLocation'

export default function App() {

  const [ searchInput, setSearchInput ] = useState('')

  const onGetSearchValue = useCallback( async (ipAddress) => {
    const data = await getIpLocation(ipAddress)
    setSearchInput(data)
  }, [])

  return (
    <IpContext.Provider value={{searchInput}}>
      <SearchIp 
        onSearch={onGetSearchValue} 
      />
      <IpTrackerDetails />
      <Map />
    </IpContext.Provider>
  )
}
