import style from "./Card.module.css";

function Card(props) {
    return ( 
        <div className={style.Card}>
            <img src={props.data.image} alt={props.data.name}/>
            <h3>{props.data.name}</h3>
        </div>
     );
}

export default Card;