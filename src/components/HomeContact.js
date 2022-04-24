import styles from "./HomeContact.module.css";
import GoogleMaps from "./Map/GoogleMaps";
import ImageSection from "./About/ImageSection";

function HomeContact(props) {
    return ( 
        <div className={styles.homeContact}>
            <div className={styles.img}>
                <h2>ALASEEL AL DAYEM GOODS WHOLESALERS L.L.C</h2>
                <p>For any kind of enquiries and business, contact us</p>
                <p><img src="./location-arrow-solid.svg" alt=""/>Office#310, Wasl R260 Block-B, Dubai UAE</p>
                <p><img src="./phone-solid.svg" alt=""/>Office : +0097148922704</p>
                <p><img src="./phone-solid.svg" alt=""/>Mobile : +00971502741516 / +00971502571516</p>
                <p><img src="./whatsapp-brands.svg" alt=""/>+00971502741516 / +00971502571516</p>
                <p><img src="./envelope-solid.svg" alt=""/>alaseelaldyem2021@gmail.com</p>
                <p><img src="./internet-explorer-brands.svg" alt=""/>alaseelaldayem.com</p>
                
            </div>
            <div className={styles.map}>
                <GoogleMaps />
            </div>
        </div>
     );
}

export default HomeContact;