import { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader';
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState(false)
    const {itemId} = useParams()
    const [validateItem, setValidateItem] = useState(false)

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db,"productos")
        const referenciaDoc = doc (collectionProd,itemId)
        getDoc(referenciaDoc)
        .then((res)=> {
            if(res.data()){
                setProducto({id:res.id, ...res.data()})
            }else{
                setValidateItem(true)
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])
    
    if(cargando){
        return <h1 className='carga-item'><Loader/></h1>
    }
    return(
        <div>
            {validateItem ? <p className='no-producto'>El producto no existe</p> : <ItemDetail producto={producto}/>}
        </div>
    )
}
export default ItemDetailContainer
