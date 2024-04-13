import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext' 
import { addDoc, collection,serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import {db} from '../../services/firebase'
import { Link } from "react-router-dom";
import './checkout.css'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)

    const userData = (e) =>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.email || !user.phone || !user.dni){
            alert('Completa todos los campos')
        }else{
            let order ={
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas,order)
            .then((res)=>{
                cart.forEach((item)=>{
                    const docRef = doc(db,'productos', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef,{stock: dbDoc.data().stock = item.quantity})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>console.log(error))
        }
        
    }

    return(
        <div>
        {orderId !==''
        ?<div>
            <h4 className="titulo-orden">Generaste tu orden con éxito! 👏🏼</h4>
            <h5 className="id-orden">El ID de tu producto es: {orderId}</h5>
            <Link className="inicio-orden" to ='/'>Volver al Inicio 🏠</Link>
        </div>
        :
        <div>
            <h3 className="titulo-form">Último paso! 🤞🏼</h3>
            <h4 className="subtitulo-form">Completá tus datos:</h4>
            <form onSubmit={finalizarCompra} className="formulario">
                <input className="item-form" name='name' placeholder='Nombre' type="text" onChange={userData}/>
                <input className="item-form" name='lastname' placeholder='Apellido' type="text" onChange={userData}/>
                <input className="item-form" name='email' placeholder='su@correo.com' type="email" onChange={userData}/>
                <input className="item-form" name='phone' placeholder='9 999 999 999' type="number" onChange={userData}/>
                <input className="item-form" name='dni' placeholder='99999999' type="number" onChange={userData}/>
                <button className="btn-enviar" type="submit">Enviar</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout