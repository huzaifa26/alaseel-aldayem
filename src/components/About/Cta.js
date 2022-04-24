import styles from "./Cta.module.css";

function Cta() {
    return ( 
        <div className={styles.Cta}>
            <div>
                <img src="./qualityp.png" alt=""/>
                <h3>High Quality Products</h3>
                <p>We are dealing with premium quality products for wide ranges</p>
            </div>
            <div>
                <img src="./affordable.png" alt=""/>
                <h3>Affordable</h3>
                <p>All our products are best in quality and we are selling it affordable price.</p>
            </div>
            <div>
                <img src="./package.png" alt=""/>
                <h3>Well Packaged</h3>
                <p>Well quality packaging with all safety measures. suitable packaging for any handlings.   </p>
            </div>
            <div>
                <img src="./fast-delivery.png" alt=""/>
                <h3>Easy Delivery</h3>
                <p>We are providing easy shipping options to your space.</p>
            </div>
        </div>
     );
}

export default Cta;