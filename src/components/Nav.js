import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {

    const navs=[
        {
            name:"Home",
            route:"/"
        },
        {
            name:"About Us",
            route:"/about"
        },
        {
            name:"Products",
            route:"/products"
        },
        {
            name:"Contact Us",
            route:"/contact"
        }
    ]

    return ( 
        <div>
            <div className={styles.logoDiv}>
                <section>
                    <div className={styles.icons}>
                        <img alt="facebook" src="./facebook-brands.svg"></img>
                        <img alt="twitter" src="./twitter-brand.svg"></img>
                        <img alt="instagram" src="./instagram-square-brands.svg"></img>
                    </div>
                    <div>Logo</div>
                    <div>
                        <button>Contact Us</button>
                    </div>
                </section>
            </div>
            <nav className={styles.nav}>
                <ul>
                    {navs.map((nav)=>{
                        return(
                            <Link to={nav.route}>
                                <li>{nav.name}{nav.name === "Products" && <p className={styles.p}>v</p>}</li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
     );
}

export default Nav;