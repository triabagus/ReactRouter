import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }){
  
    useEffect(() => {
        fecthItem();
        console.log(match);
    }, []);
  
    const [item, setItem] = useState([{}]); 

    const fecthItem = async () => { 
        const fecthItem = await fetch(
            `https://www.amiiboapi.com/api/amiibo/?type=yarn&tail=${match.params.id}`
        );
        const item = await fecthItem.json();
        setItem(item.amiibo[0]);
        console.log(item.amiibo[0]);
    }

    return (
        <div>
            <h1>Item</h1>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
        </div>
    );
  
}

export default Item;
