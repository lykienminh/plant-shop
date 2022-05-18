import React from 'react'
import ReactMapGL from 'react-map-gl'

function MapBox () {
    const [viewport, setViewport] = React.useState({
        width: "100vw",
        height: "100vh",
        latitude: 37.7577,
        longtitude: -122.4376,
        zoom: 1,
    });
    return (
        <ReactMapGL 
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAccessToken="pk.eyJ1IjoiZGFubmhoIiwiYSI6ImNsMmI4MW5oejAxdGkzb3NmbXRmNmNldTUifQ.YAcYK2xfuxsO2nvLoKbc9g">
        </ReactMapGL>
    )
}

export default MapBox