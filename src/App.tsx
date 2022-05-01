import React from 'react';
import Card from './components/Card/Card';
import './App.css';
import './cards.css'
function App() {
    let shoppingCart = [
        {id: 0, item: 'jumper', img: 'http://risovach.ru/upload/2016/05/mem/dasha_114357588_orig_.png', color: 'red', size: 'medium', price: 20},
        {id: 1, item: 'shirt', img: 'http://risovach.ru/upload/2013/12/mem/gomer_36351555_orig_.jpg', color: 'blue', size: 'medium', price: 15},
        {id: 2, item: 'socks', img: 'https://avatars.mds.yandex.net/i?id=c4cf016eec34d44ca4c8f36563258215_l-5279616-images-thumbs&ref=rim&n=13&w=1080&h=1080', color: 'black', size: 'all', price: 5},
    ]
    return (
      <section className={"cards"}>
          {shoppingCart.map((item, key) => (
              <Card key={key} item={item}/>
          ))}
      </section>
  );
}
export default App;
