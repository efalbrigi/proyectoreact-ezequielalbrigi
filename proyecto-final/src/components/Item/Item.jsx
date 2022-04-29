import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item =({title, image, precio}) =>{
    return(
        <>
            <div className='card'>

                <div className='header'>{title}</div>
                
                <div className='content'>

                    <div className='img-container'>
                         <img className='imagen'  src= {image} alt="imagen"/>
                    </div>
                
                </div>

                <div className='footer'>{precio}</div>

            </div>
            
            
        </>
    )
}

export default Item