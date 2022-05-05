import React from 'react';
import ReactDOM from "react-dom";
import "./Card.css";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: null,
        id: this.props.item.id
    }
    updateState = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        console.log(this.props.item)
        return (
            <div className={"card"}>
                <img src={this.props.item.img} className={"card__image"} alt={this.props.item.item}/>
                <div className={"card__info"}>
                    <p className={"card__title"}>{this.props.item.item}</p>
                    <p className={"card__title"}>{this.props.item.size}</p>
                    <p className={"card__title"}>{this.props.item.price}</p>
                </div>
                <p className={"card__title"}>{this.props.item.count}</p>

                <button className={"card__submit"} onClick={() => {
                    this.props.updateData(this.state.count, this.state.id)
                    this.updateState()
                }}>Добавить в корзину</button>
            </div>
        );
    }
}

export default Card;
