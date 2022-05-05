import React from 'react';
import ReactDOM from "react-dom";
import "./Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer className={"footer"}>
                <div className={"footer__squares"}>
                    <div className={"footer__left-square"}>
                        <p className={"footer__title"}>Все права защещены R</p>
                    </div>
                    <div className={"footer__links"}>
                        <a className={"footer__link"} href={"#"}><img alt={"#"} src={"#"}/>Facebook</a>
                        <a className={"footer__link"} href={"#"}><img alt={"#"} src={"#"}/>Vkontakte</a>
                        <a className={"footer__link"} href={"#"}><img alt={"#"} src={"#"}/>oDnolkassniki</a>
                        <a className={"footer__link"} href={"#"}><img alt={"#"} src={"#"}/>Instasramm</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer