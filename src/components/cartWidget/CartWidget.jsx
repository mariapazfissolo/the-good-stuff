import { useContext } from 'react';
import './cartWidget.css'
import { CartContext } from '../../context/CartContext';

const CartWidget = ({counter}) => {
    const {cart} =useContext(CartContext)
    console.log(cart)
    return(
        <div className='container'>
        <img className='carro' src='./images/carrito.png'alt='carrito'/>
        <span className='badge'>{cart.length}</span>
        </div>
    )
}

export default CartWidget;