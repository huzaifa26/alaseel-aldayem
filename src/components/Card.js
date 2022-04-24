import style from "./Card.module.css";

function Card(props) {

    return ( 
        <div className={style.Card}>
            <img  className={props.data.name === "Laptop" || props.data.name === "Tomato Paste" ? style.style1:""} src={props.data.image} alt={props.data.name}/>
            <h3 style={{marginTop:props.data.name === "Camera"?"-50px":""}}>{props.data.name}</h3>
        </div>
     );
}

export default Card;