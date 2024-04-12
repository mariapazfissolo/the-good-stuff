import { useEffect, useState } from 'react';
import { getProducts } from '../../mock/data';
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader';
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState(false)
    const {itemId} = useParams()

    //useEffect (() => {
    //setCargando(true)
    //getProducts()
    //.then((res)=> setProducto (res.find((item)=> item.id === itemId)))
    //.catch ((error)=>console.log(error))
    //.finally(()=> setCargando(false))
    //},[itemId])

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db,"productos")
        const referenciaDoc = doc (collectionProd,itemId)
        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])

    return (
        <div>
             { cargando ? <h1 className='carga-item'><Loader/></h1> : <ItemDetail producto={producto}/>}
        </div>
    )
}
export default ItemDetailContainer
