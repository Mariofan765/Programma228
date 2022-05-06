import React from 'react';
import ReactDOM from "react-dom";
import "./Card.css";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0,
        id: this.props.item.id
    }
    render() {
        return (
            <div className={"card"}>
                <img src={this.props.item.img} className={"card__image"} alt={this.props.item.item}/>
                <div className={"card__info"}>
                    <p className={"card__title"}>{this.props.item.item}</p>
                    <p className={"card__title"}>{this.props.item.size}</p>
                    <p className={"card__title"}>{this.props.item.price}</p>
                </div>
                <p className={"card__title"}>{this.props.shoppingCart.count}</p>

                <button className={"card__submit"} onClick={() => {
                    this.props.updateData(this.props.shoppingCart.count, this.state.id, '+')
                }}>Добавить в корзину</button>
                <button className={"card__submit"} onClick={() => {
                    this.props.updateData(this.props.shoppingCart.count, this.state.id, '-')
                }}>Убрать из корзины</button>
            </div>
        );
    }
}

export default Card;
