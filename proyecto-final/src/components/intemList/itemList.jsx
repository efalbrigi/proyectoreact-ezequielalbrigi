import Item from "../Item/Item";

const ItemList =({productos}) =>{
    return (
        <>
            
            {productos.map(producto =>{
                return(
                    <Item key={producto.id} title={producto.title} image={producto.image} descripcion= {producto.descripcion} precio={producto.precio} /> 
                );
            })}

        </>
    );

};

export default ItemList