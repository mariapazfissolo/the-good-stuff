import React, { useContext } from 'react'
import CartView from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div>
      {! cart.length ? 
      <div className='carrito-vacio'>
        <h2 className='carrito'>Tu carrito está vacío 🙁</h2>
        <h4 className='carrito'>Te invitamos a ver todos los productos!</h4>
        <Link className='btn-ver' to='/'>Ir a ver 👀</Link>
      </div> : <CartView/>}
    </div>
  )
}

export default Cart