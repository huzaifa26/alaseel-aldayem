import styles from "./Map.module.css";
import GoogleMaps from "../Map/GoogleMaps";

function Map() {
    return ( 
        <div className={styles.Map}>
            <GoogleMaps />
        </div>
     );
}

export default Map;