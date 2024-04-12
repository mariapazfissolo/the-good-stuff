import { useEffect, useState } from 'react';
import { getProducts } from '../../mock/data';
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState(false)
    const {itemId} = useParams()

    useEffect (() => {
        setCargando(true)
        getProducts()
        .then((res)=> setProducto (res.find((item)=> item.id === itemId)))
        .catch ((error)=>console.log(error))
        .finally(()=> setCargando(false))

    },[itemId])

    return (
        <div>
             { cargando ? <h1 className='carga-item'><Loader/></h1> : <ItemDetail producto={producto}/>}
        </div>
    )
}
export default ItemDetailContainer
