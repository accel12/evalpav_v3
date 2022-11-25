import React, { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useEffect } from 'react';
import useIndice from '../hooks/useIndice';
import useDataExcel from '../hooks/useDataExcel';
import L from 'leaflet';
const defaultZoom = 15;
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = ({datos}) => {
  const [posicion, setPosicion] = useState([0,0])
  const indice=useIndice()
  const data=useDataExcel()
  const mapRef = useRef();
  const markerRef = useRef();
  useEffect(() => {
    if(data.length!==0){
      setPosicion([data[indice][0].InicioLatitud,data[indice][0].InicioLongitud])
    }
  }, [])
  
  useEffect(() => {
    if(data.length!==0){
      setPosicion([data[indice][0].InicioLatitud,data[indice][0].InicioLongitud])
      const marker=markerRef.current;
      const map=mapRef.current;
      if(marker){
        marker.setLatLng([data[indice][0].InicioLatitud,data[indice][0].InicioLongitud])
      }
      if(map){
        map.flyTo([data[indice][0].InicioLatitud,data[indice][0].InicioLongitud], 15, {
          duration: 0
        });
      }
    }
  }, [indice])
  
  return (
    <div>
      {
        data.length!==0 ?
          <MapContainer ref={mapRef} center={[data[0][0].InicioLatitud,data[0][0].InicioLongitud]} zoom={defaultZoom} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker ref={markerRef} position={posicion}>
                  <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          </MapContainer>
          :
          <MapContainer center={[38.9072, -77.0369]} zoom={defaultZoom} scrollWheelZoom={false}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
          </MapContainer>
      }
    </div>
  )
}

export default Mapa