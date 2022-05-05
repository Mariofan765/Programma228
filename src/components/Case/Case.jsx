import React from 'react';
import ReactDOM from "react-dom";

class Case extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.content)
        return (
            <>
                <p>Case</p>
                <button onClick={() => {this.props.updateContent('main')}}>X</button>
            </>
        )
    }
}
export default Case