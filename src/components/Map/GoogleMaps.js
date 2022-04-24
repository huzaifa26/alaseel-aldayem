import {GoogleMap,DirectionsRenderer, Marker} from "@react-google-maps/api";
import { useCallback,useState,useEffect,useRef } from "react";


const GoogleMaps=()=>{    
  const [map, setMap] = useState(null)

    const center = {
    lat: 25.2690343,
    lng: 55.3079951
    };

    const mapStyles = {
    maxWidth: "12000px",
    height: "100%",
    };


    const onUnmount = useCallback(function callback(map) {
    setMap(null)
    }, [])

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);


    const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
    }, [])

      return(
    <GoogleMap
        center={center}
        zoom={18}
        mapContainerStyle={mapStyles}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        >
          <Marker
            onLoad={onMapLoad}
            position={center}
          />
    </GoogleMap>
      )
  }

  export default GoogleMaps;