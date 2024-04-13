import React from 'react'
import './itemListContainer.css'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

function ItemListContainer ({greetting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()

  useEffect (()=>{
    setLoading(true)
    const productsCollection = categoryId ? query(collection(db,"productos"),where("category","==",categoryId)) :collection(db,"productos")
    getDocs(productsCollection)
    .then((res)=>{
      const list = res.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductos(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[categoryId])

  if (loading){
    return(
      <Loader/>
    )
  }

  return(
    <div className='container2'>
      {categoryId ?<h1 className='banner-1'>{greetting} <span className='banner-category'>{categoryId}</span></h1> :<h1 className='banner-2'>{greetting}</h1>}
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;