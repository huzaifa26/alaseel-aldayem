import styles from "./ImageSection.module.css";

function ImageSection(props) {
    return ( 
        <>
            <div className={styles.row}></div>
            <div className={styles.ImageSection}>
                <h1>{props.mainHeading}</h1>
                <img src={props.image}/>
            </div>
        </>

     );
}

export default ImageSection;