import React, { useContext, useState } from "react";
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.css'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) =>{
    const [compra, setCompra] = useState(false)
    const {addItem} = useContext(CartContext)
    

    const onAdd = (cantidad) =>{
        addItem (producto,cantidad)
        setCompra(true)
    }
    return(
        <div className="detalle-producto">
                <h3 className="prod-nombre">{producto.name}</h3>
                <img className="prod-img" src={producto.imagen} alt={producto.name} />
                <p className="prod-description">{producto.description}</p>
                <p className="prod-precio">${producto.price} { compra ? <button className="btn-comprar">Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd}/>}</p>
        </div>
    )
}
export default ItemDetail