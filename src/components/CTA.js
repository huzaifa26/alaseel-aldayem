import styles from "./CTA.module.css";
import { Link } from "react-router-dom";

function CTA() {
    return ( 
        <div className={styles.CTA}>
            <div className={styles.container}>
                <div>
                    <img className={styles.firstImage} src="./g-p.png" alt="" />
                    <div>
                        <h2>Food Products</h2>
                        <p>Avail The Best Care From A Variety Of Products, From A Wide Array Of Brands.</p>
                        <button>Explore More</button>
                    </div>
                </div>
                <div>
                    <img src="./e-p.png" alt=""/>
                    <div>
                        <h2>Electronic Gadgets</h2>
                        <p>Find best For Your specifications By Shopping From A Wide Selection Of Phones, Tabs And Accessories.</p>
                        <button>Explore More</button>
                    </div>
                </div>
                <div>
                    <img src="./shipping.png" alt=""/>
                    <div>
                        <h2>Shipping Service</h2>
                        <p>We have the shipping service for transporting the goods from different places for making the trading simple.</p>
                        <Link to="/contact"><button>Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CTA;