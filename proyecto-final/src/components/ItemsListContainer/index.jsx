import React, { useEffect, useState } from 'react'
import ItemList from '../intemList/itemList';
import GetData from '../../services/GetData';


const ItemListContainer=({greeting}) => {
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