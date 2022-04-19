import Card from "./Card";
import { Link } from "react-router-dom";
import styles from "./FoodProduct.module.css"

function FoodProduct(props) {

    return ( 
    <div className={styles.FoodProduct}>
        <div>
            <div>
                <h2>{props.foodProduct.heading1}</h2>
                <p>{props.foodProduct.para1}</p>
            </div>
            <div>
                <h2>{props.foodProduct.heading2}</h2>
                <div>
                {props.foodProduct.cardsData.map((data)=>{
                    return(
                        <Card data={data}/>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
    );
}

export default FoodProduct;