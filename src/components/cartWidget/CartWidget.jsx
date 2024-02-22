import './cartWidget.css'
const CartWidget = () => {
    return(
        <div className='container'>
        <img className='carro' src='./images/carrito.png'alt='carrito'/>
        <span className='badge'>5</span>
        </div>
    )
}

export default CartWidget;