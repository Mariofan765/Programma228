import React from '../../App';
import "./Card.css";

function Card(prop) {
    return (
        <div className={"card"}>
            <img src={prop.item.img} className={"card__image"} alt={prop.item.item}/>
            <div className={"card__info"}>
                <p className={"card__title"}>{prop.item.item}</p>
                <p className={"card__title"}>{prop.item.size}</p>
                <p className={"card__title"}>{prop.item.price}</p>
            </div>
            <button className={"card__submit"}>Добавить в корзину</button>
        </div>
    );
}

export default Card;