import React, { useEffect, useState } from 'react'
import ItemList from '../intemList/itemList';
import GetData from '../../services/GetData';
import './item-list-container.css'


function getProducts() {
    const myPromoise = new Promise ((resolve, reject) =>{
      
    const productsList = [
      {
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        title: "Hombre Araña",
        descripcion: "Cuadro Hombre Araña",
        precio: "USD 50",
        stock: "4",
      },
      {
        id: 2,
        image: "https://fondosmil.com/fondo/14644.jpg",
        title: "SuperMan",
        descripcion: "Cuadro SuperMan",
        precio: "USD 58",
        stock: "10",
      }
    ];

    setTimeout (() => {
      resolve (productsList);
    }, 2000);
    
  });

  return myPromoise;
};

function ItemListContainer ({greeting}){

  const [products, setProducts]=useState([]);

  useEffect (() =>{
    getProducts ()
      .then (res => {
        setProducts(res)
      })
}, []);

return

 <div className='list-item-container'>
   <ItemList items={products} />

 </div>





















/*const ItemListContainer=({greeting}) => {
  const [productos, setproductos] = useState([]);
  console.log("productos", productos);

  useEffect (() =>{
    GetData
    .then((response)=> setproductos (response))
    .catch ((error) => console.log("error", error));

  }, []);

  return (
    <>
      <div>{greeting}</div>
     
      <ItemList productos ={productos}/>
    </>
  );
};

export default ItemListContainer

*/