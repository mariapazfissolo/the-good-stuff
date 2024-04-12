import { useContext } from 'react';
import './cartWidget.css'
import { CartContext } from '../../context/CartContext';

const CartWidget = ({counter}) => {
    const {cartQuantity} =useContext(CartContext)

    return(
        <div className='container'>
        <img className='carro' src='./images/carrito.png'alt='carrito'/>
        {cartQuantity() > 0 && <span className='badge'>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget;