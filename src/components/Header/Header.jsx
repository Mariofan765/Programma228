import React from 'react';
import ReactDOM from "react-dom";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    isCountCard () {
        if(this.props.id === undefined) {
            return 0;
        } else {
            return this.props.countCards;
        }
    }
    render() {
        return (
            <div className={"header"}>
                <div className={"header__nav"}>
                    <button className={"header__btn"}>btn</button>
                    <button className={"header__btn"}>btn</button>
                    <button className={"header__btn"}>btn</button>
                    <button className={"header__btn"}>btn</button>
                </div>
                <button className={"header__btn header__btn-shopper"} onClick={() => {
                    this.props.updateContent('corzina')
                }}>corzina {this.isCountCard()}</button>
            </div>
        );
    }
}

export default Header;