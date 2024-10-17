import { useState } from 'react'
import IpContext from './functions/Context'
import Map from './components/Map'
import IpTracker from './components/IpTracker'
import SearchIp from './components/SearchIp'
import { getIpLocation } from './functions/getIpLocation'

export default function App() {

  const [ searchInput, setSearchInput ] = useState('')

  function onGetSearchValue(value) {
    setSearchInput(value)
  }

  return (
    <IpContext.Provider value={{searchInput}}>
      <SearchIp onGetSearchValue={onGetSearchValue} />
      <IpTracker />
      <Map />
    </IpContext.Provider>
  )
}
