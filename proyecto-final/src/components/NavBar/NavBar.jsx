import React from 'react';
import './NavBar.css';


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
        </div>
    );
}

export default navbar;