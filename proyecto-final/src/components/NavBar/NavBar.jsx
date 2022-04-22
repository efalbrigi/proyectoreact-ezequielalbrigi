import React from 'react';
import './NavBar.css';
import carrito from '../CartWidget/img/carrito.png';

function navbar(props) {
    return (

            <div className='navbar'>
              <h1 className='titulo'>
                SOFFIO
            </h1>
            <ul className='nav'>
          
                <a href='#'>CONOCENOS </a>
                <a href='#'>PRODUCTOS </a>
                <a href='#'>TIPS </a>
                <a href='#'>CONTACTOS </a>
               
            </ul>
            <img src={carrito} className='img-carrito' />
        </div>
        
    );
}

export default navbar;


