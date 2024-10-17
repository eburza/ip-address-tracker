import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useContext, useEffect } from 'react'
import IpContext from '../functions/Context'

function ChangeView({ center, zoom }) {
  const map = useMap()
  useEffect(() => {
    if (center[0] !== 0 && center[1] !== 0) {
      map.setView(center, zoom)
    }
  }, [center, zoom, map])
  return null
}

export default function Map() {
  const { ipData, isLoading, error } = useContext(IpContext)
  const defaultPosition = [51.1657, 10.4515]
  const defaultZoom = 4

  const position = ipData ? [ipData.latitude, ipData.longitude] : defaultPosition
  const zoom = ipData ? 13 : defaultZoom

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} style={{ height: '400px', width: '100%' }}>
      <ChangeView center={position} zoom={zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {ipData && (
        <Marker position={position}>
          <Popup>
            {ipData.ip}<br/>
            {ipData.city}, {ipData.country}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}