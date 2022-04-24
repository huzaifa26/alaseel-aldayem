import styles from "./Products.module.css";

function Products(props) {
    return ( 
        <div className={styles.Products}>
            <img src={props.data.image} alt=""/>
            <h3>{props.data.name}</h3>
        </div>
     );
}

export default Products;