import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './cards.css'
import Card from './components/Card/Card';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Case from "./components/Case/Case";

class App extends React.Component {
    state = {count: 0, currentPage: 'main', id: null, lastItem: {counter: 0, idItem: null}};
    constructor(props) {
        super(props);
    }
    shoppingCart = [
        {id: 0, item: 'jumper', img: 'http://risovach.ru/upload/2016/05/mem/dasha_114357588_orig_.png', color: 'red', size: 'medium', price: 20, count: null},
        {id: 1, item: 'shirt', img: 'http://risovach.ru/upload/2013/12/mem/gomer_36351555_orig_.jpg', color: 'blue', size: 'medium', price: 15, count: null},
        {id: 2, item: 'socks', img: 'https://avatars.mds.yandex.net/i?id=c4cf016eec34d44ca4c8f36563258215_l-5279616-images-thumbs&ref=rim&n=13&w=1080&h=1080', color: 'black', size: 'all', price: 5, count: null},
    ]
    updateData = (item, id, side) => {
        if(side === '+') {
            this.setState({count: this.state.count + 1, id: id})
            if (id !== null)
                this.shoppingCart[id].count = item + 1;
        } else {
            if(this.state.count > 1) {
                this.setState({count: this.state.count - 1, id: id})
                if (id !== null)
                    this.shoppingCart[id].count = item - 1;
            } else {
                this.setState({count: null})
                this.shoppingCart[id].count = null;

            }
        }
    }
    storageArr = []
    storageClear = () => {
        this.shoppingCart.forEach((item, i) => {
            item.count = null
        })
        this.setState({count: null})
    }
    updateContent = (value) => {
        this.setState({currentPage: value})
    }
    render() {
        return (
            <div className={"main"}>
                <header>
                    <Header countCards={this.state.count} id={this.state.id} updateContent={this.updateContent} storage={this.storage}/>
                </header>
                <section className={"cards"}>
                    {this.state.currentPage === 'main'
                        ?
                        this.shoppingCart.map((item, key) => (<Card key={key} item={item} updateData={this.updateData} shoppingCart={this.shoppingCart[key]}/>))
                        :
                        <Case updateContent={this.updateContent} storageClear={this.storageClear} content={this.shoppingCart}/>}
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}
export default App;
