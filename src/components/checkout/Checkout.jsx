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
    const [validateEmail, setValidateEmail]=useState('')

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
            alert('Todos los campos son obligatorios')
        }else if(user.email !== validateEmail){
            alert('Los E-mails deben ser iguales')
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
                <label className="nombres-items">
                    <p className="item">Nombre*</p>
                    <input className="item-form" name='name' placeholder='Nombre' type="text" onChange={userData}/>
                </label>
                <label className="nombres-items">
                    <p className="item">Apellido*</p>
                    <input className="item-form" name='lastname' placeholder='Apellido' type="text" onChange={userData}/>
                </label>
                <label className="nombres-items">
                    <p className="item">E-mail*</p>
                    <input className="item-form" name='email' placeholder='su@correo.com' type="email" onChange={userData}/>
                </label>
                <label className="nombres-items">
                    <p className="item">Repetir E-mail*</p>
                    <input className="item-form" name='emailrep' placeholder='su@correo.com'type='email' onChange={(e)=> setValidateEmail(e.target.value)}/>
                </label>
                <label className="nombres-items">
                    <p className="item">Celular/Telefono*</p>
                    <input className="item-form" name='phone' placeholder='9 999 999 999' type="number" onChange={userData}/>
                </label>
                <label className="nombres-items">
                   <p className="item">DNI*</p><p className="espacios" >(sin puntos ni espacios)</p>
                    <input className="item-form" name='dni' placeholder='99999999' type="number" onChange={userData}/>
                </label>
               
                <button className="btn-enviar" type="submit">Confirmar compra</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout