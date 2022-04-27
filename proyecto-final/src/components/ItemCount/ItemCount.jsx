import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount=({stock, initial}) => {
//Logica
    const [count, setCount]= useState(initial);
    console.log("Soy el contador",count);

    const onIncrease= () =>{
        const newValue = count + 1
        if (newValue <= stock) {
            setCount(newValue);
        };
    };

    const onDecrease= () =>{
        const newValue = count - 1
        if (newValue >= initial) {
            setCount(newValue);
        };
    };

    const onAdd = () =>{
        const message =`Agregaste ${count} Producto`
        count===1 ? alert(message) : alert (`${message}s`);
    }

//Render
    return(

        <div className="d-flex flex-column">
            <div className="d-flex mt-3">
                <button variant="primary" onClick={onDecrease}  className="px-3 mx-3">
                </button>{""}
                
                <h3 className="px-3 mx-3">{count}</h3>
                
                <button variant="primary" onClick={onIncrease} className="px-3 mx-3">
                </button>{""}

            </div>

            <button variant="danger" onClick={onAdd} className="mt-3">
                Agregar al Carrtio
            </button>{""}
            
        </div>
    
    );

};

export default ItemCount;