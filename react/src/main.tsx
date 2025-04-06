import React from 'react'
import ReactDOM from 'react-dom/client'
import RootRoute from './RootRoute.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

import markerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'


L.Marker.prototype.setIcon(L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
}))


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RootRoute />
    </Provider>
  </React.StrictMode>,
)
