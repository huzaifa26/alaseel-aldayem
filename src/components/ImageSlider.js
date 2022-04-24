import styles from "./ImageSlider.module.css";

function ImageSlider() {
    return ( 
        <>
            <div className={styles.row}>
            </div>
            <div className={styles.image}>
                    <img src="./container.jpg"/>
            </div>
        </>
     );
}

export default ImageSlider;