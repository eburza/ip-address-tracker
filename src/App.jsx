import Map from './components/Map'
import IpTracker from './components/IpTracker'
import SearchIp from './components/SearchIp'

export default function App() {

  return (
    <>
      <h1>ip address tracker</h1>
      <SearchIp />
      <IpTracker />
      <Map />
    </>
  )
}
