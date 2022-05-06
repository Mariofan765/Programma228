import React from 'react';
import ReactDOM from 'react-dom';

class CaseCard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {content: this.props.item}
    render() {
        return (
            <div className={"card"}>
                <img src={this.state.content.img} className={"card__image"} alt={this.state.content.item}/>
                <p className={"card__title"}>{this.state.content.item}</p>
                <p className={"card__title"}>{this.state.content.size}</p>
                <p className={"card__title"}>{this.state.content.price * this.state.content.count}</p>
                <p className={"card__title"}>{this.state.content.count}</p>
                <button onClick={() => {
                    console.log(this.state)
                }}>Э УБЕРИ НАХУЙ ОТСЮДА</button>
            </div>
        )
    }
}

export default CaseCard