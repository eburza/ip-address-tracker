import Map from './components/Map'
import IpTracker from './components/IpTracker'
import SearchIp from './components/SearchIp'
import { getIpLocation } from './functions/getIpLocation'

export default function App() {

  return (
    <>
      <SearchIp />
      <IpTracker />
      <Map />
    </>
  )
}
