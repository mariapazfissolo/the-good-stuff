import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartView.css'
import { Link } from 'react-router-dom';


const CartView = () => {
    const {cart,removeItem,cartPriceTotal,clear} = useContext(CartContext)
    return (
        <div>
            <h2 className='titulo-carrito'>Mi carrito</h2>
            <div className='carrito-compras'>
                {cart.map((compra)=>{
                    return(
                        <div key={compra.id} className='items'>
                            <img className='foto-carrito' src={compra.imagen} alt={compra.name}/>
                            <span>{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>${compra.price},00</span>
                            <span>Total: ${compra.price * compra.quantity},00</span>
                            <button className='btn-eliminar' onClick={()=>removeItem(compra.id)}>❌</button>
                        </div>
                    )
                })}
            </div>
            <p className='total-a-pagar'>Total a pagar: ${cartPriceTotal()},00</p>
            <div className='btns-carrito'>
                <Link to='/checkout' className='btn-pagar'>Comprar 💸</Link>
                <button className='btn-vaciar' onClick={clear}>Vaciar carrito 🗑️</button>
            </div>
            
        </div>
    )
}

export default CartView