import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext' 
import { addDoc, collection,serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import {db} from '../../services/firebase'
import { Link } from "react-router-dom";

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
            <h4>Generaste tu orden!</h4>
            <h5>El id es: {orderId}</h5>
            <Link to ='/'>Volver a Inicio 🏠</Link>
        </div>
        :
        <div>
            <h3>Último paso!</h3>
            <h4>Completá tus datos:</h4>
            <form onSubmit={finalizarCompra}>
                <input name='name' placeholder='Nombre' type="text" onChange={userData}/>
                <input name='lastname' placeholder='Apellido' type="text" onChange={userData}/>
                <input name='email' placeholder='su@correo.com' type="email" onChange={userData}/>
                <input name='phone' placeholder='9 999 999 999' type="number" onChange={userData}/>
                <input name='dni' placeholder='99999999' type="number" onChange={userData}/>
                <button type="submit">Enviar</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout