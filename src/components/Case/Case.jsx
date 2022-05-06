import React from 'react';
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import CaseCard from "../CaseCard/CaseCard";

class Case extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {content: this.props.content}
    storageClear = () => {
        if(this.state.content !== null)
        this.state.content.forEach((item,i) => {
            if(this.state.content[i].count !== null)
            this.setState({content: null})
        })
    }
    render() {
        console.log(this.props)
        return (
            <>
                <p>Case</p>
                <div>
                    {this.state.content !== null ? this.state.content.map((item, key) => (
                        item.count !== null ?
                            <CaseCard item={item} key={key} storageClear={this.storageClear}/> : false)) : false}

                </div>
                <button onClick={() => {this.props.updateContent('main')}} >X</button>
                <button onClick={() => {
                    this.storageClear()
                    this.props.storageClear()

                }} >Clear</button>
            </>
        )
    }
}
export default Case