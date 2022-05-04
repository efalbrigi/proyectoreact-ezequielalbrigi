import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

function getItem() {
    
  const myPromoise = new Promise ((resolve, reject) =>{
      
    const item={
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        titulo: "Hombre Araña",
        precio: "USD 50",
        stock: "4",
    }
    
    setTimeout (() => {
      resolve (item);
    }, 2000);
  
  });

  return myPromoise;
}

function ItemDetailContainer (){

  const [item, setItem]=useState({});

    useEffect (() =>{

      getItem()

        .then (res => {

          setItem(res)

        })
    },[]);

    return(

      <div className='item-detail-container'>
        <ItemDetail item={item} />

      </div>
    )
      
};


export default ItemDetailContainer


