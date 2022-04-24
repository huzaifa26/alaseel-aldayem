import styles from "./Grocery.module.css";
import ImageSection from "../../components/About/ImageSection";
import Products from "../../components/Products";
import {foodProduct,electronicProduct} from "../Home/Home";


function Grocery() {

    console.log()
    console.log(electronicProduct.cardsData)

    return ( 
        <div>
            <ImageSection mainHeading={"Grocery Items"} image={"carts.jpg"}/>
            <div className={styles.productsDiv}>

                {foodProduct.cardsData.map((data)=>{
                    return(
                        <Products data={data}/>
                        
                    )
                })}

            </div>
        </div>
     );
}

export default Grocery;