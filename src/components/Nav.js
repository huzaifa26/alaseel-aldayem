import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav(props) {
    const [showModal,setShowModal]=useState(false);

    // const onMouseEnterhandler=()=>{
    //     setShowModal(true);
    // }

    // const onMouseLeaveHandler=()=>{
    //     setShowModal(false)
    // }

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
            route:"Products"
        },
        {
            name:"Contact Us",
            route:"/contact"
        }
    ]

    return ( 
        <div>
            {showModal && 
            <div className={styles.modal}>
                <Link to={"grocery"}><h3 style={{borderBottom: "1px solid rgb(255, 255, 255)"}} className={styles.h3}>Grocery</h3></Link>
                <Link to={"electronic"}><h3 className={styles.h3}>Electronic</h3></Link>
            </div>}
            <div className={styles.logoDiv}>
                <section>
                    <div className={styles.icons}>
                        <img alt="facebook" src="./facebook-brands.svg"></img>
                        <img alt="twitter" src="./twitter-brand.svg"></img>
                        <img alt="instagram" src="./instagram-square-brands.svg"></img>
                    </div>
                    <div>
                        <img className={styles.logo} src="./logo1.png" alt=""/>
                    </div>
                    <div>
                        <button>Contact Us</button>
                    </div>
                </section>
            </div>
            <nav className={styles.nav}>
                <ul>
                    {navs.map((nav)=>{
                        return(
                            <Link to={nav.route === "Products" ? "#" : nav.route }>
                                <li onClick={()=>{
                                    if(nav.route === "Products"){setShowModal(!showModal);}}}>{nav.name}{nav.name === "Products" && <p style={{transform:showModal?'rotate(180deg)':''}} className={styles.p}>v</p>}</li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
     );
}

export default Nav;