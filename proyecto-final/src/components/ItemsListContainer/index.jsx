import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer=({greeting}) => {
  return (
    <>
      <div>{greeting}</div>
      <ItemCount stock ={18} initial= {1}/>
    </>
  );
};

export default ItemListContainer