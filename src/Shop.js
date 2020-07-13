import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop(){
  
    useEffect(() => {
      fecthItems();
    }, []);
  
  const [items, setItems] = useState([]); 

    const fecthItems = async () => { 
      const data = await fetch('https://www.amiiboapi.com/api/amiibo/?type=yarn');
      const items = await data.json();
      console.log(items.amiibo);
      setItems(items.amiibo);
    }

    return (
      <div>
        <h1>Shop Page</h1>
        {items.map(item => (
          <h1 key={item.tail}>
            <Link to={`/shop/${item.tail}`}>
              {item.name}
            </Link>
          </h1>
        ))}
      </div>
    );
  
}

export default Shop;
