import React from 'react'
import Item from '../Item/Item';
import './item-list-container.css'


function ItemListContainer({greeting}) {
    const ItemList = [
      {
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        title: "Hombre Araña",
        precio: "USD 50",
        stock: "4",
      },
      {
        id: 2,
        image: "https://fondosmil.com/fondo/14644.jpg",
        title: "SuperMan",
        precio: "USD 58",
        stock: "10",
      }
    ];


  return ( 
    <div className='list-item-container'>
      {ItemList.map((item,i) =><Item item={item} key={item.id} />)}

    </div>

  )

};

export default ItemListContainer;






/* const ItemListContainer=({greeting}) => {
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