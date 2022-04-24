import styles from "./Grocery.module.css";
import ImageSection from "../../components/About/ImageSection";
import Products from "../../components/Products";
import {electronicProduct} from "../Home/Home";

function Electronic() {
    return ( 
        <div className={styles.Electronic}>
            <ImageSection mainHeading={"Electronic Products"} image={"./headphone.jpg"}/>
            <div className={styles.productsDiv}>
            {electronicProduct.cardsData.map((data)=>{
                return(
                    <Products data={data}/>
                )
            })}
            </div>
        </div>
     );
}

export default Electronic;