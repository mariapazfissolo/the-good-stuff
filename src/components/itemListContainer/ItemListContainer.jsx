import React from 'react'
import './itemListContainer.css'
import {useState, useEffect} from 'react'
import ItemCount from '../itemCount/ItemCount'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'



 function ItemListContainer ({greetting}) {
    const [productos, setProductos]=useState([])
    
    useEffect(()=>{
        getProducts()
        .then((res)=>setProductos(res))
        .catch((error)=> console.log(error, 'todo mal'))
      },[])


     return(
         <div className='container2'>
             <div className='intro'>
                  <h1 className="bienvenida">{greetting}</h1>
                  <ItemList productos={productos}/>
                  <ItemCount stock={11}></ItemCount>
             </div>
         </div>
     )
 }

export default ItemListContainer;