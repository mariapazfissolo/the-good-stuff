import React from "react";
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({producto}) =>{
    return(
        <div className="detalle-producto">
                <h3 className="prod-nombre">{producto.name}</h3>
                <img className="prod-img" src={producto.imagen} alt={producto.name} />
                <p className="prod-description">{producto.description}</p>
                <p className="prod-precio">${producto.price} <ItemCount stock={producto.stock}/></p>
        </div>
    )
}
export default ItemDetail