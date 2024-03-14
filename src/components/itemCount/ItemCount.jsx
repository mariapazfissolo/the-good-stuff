import React from 'react'
import {useState} from 'react'
import './itemCount.css'

const ItemCount = ({stock}) =>{
    const [count, setCount]= useState(1)

    const onAdd = ()=>{
        alert('Compraste un item')
    }

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    return(
        <>
        <div className="contador">
        <button className="btn-restar" onClick={restar}>-</button>
            <span  className="btn">{count}</span>
            <button className="btn-sumar" onClick={sumar}>+</button>
            <button className="btn-comprar" disabled={stock === 0 || count === 0} onClick={onAdd}>Comprar</button>
        </div>
        </>
    )
}
export default ItemCount