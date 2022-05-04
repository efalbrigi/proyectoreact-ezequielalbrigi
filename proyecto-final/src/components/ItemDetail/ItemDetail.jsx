import React from "react";
import './ItemDetail.css'

function ItemDetail({item}) {
    return (
        <>
        <div className='item-detail'>

            <div className='left'>

                <div className='img-detail-container'>
                    <img src={item?.image}/>
                </div>

            </div>

        </div>

        <div className='right'>
            <div className='info-container'>
                
                <h2>{item?.titulo}</h2>
                <p>{item?.precio}</p>

                <div className='count-container'>
               
                </div>
            </div>
        </div>
        </>
    )

}

export default ItemDetail;