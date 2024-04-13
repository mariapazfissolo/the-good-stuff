import React from 'react'
import './itemListContainer.css'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'
import { productosData } from '../../mock/data'

function ItemListContainer ({greetting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()
    
  //useEffect(()=>{
  //  getProducts()
  //  .then((res)=> {
  //    if (categoryId){
  //      setProductos(res.filter((prod)=> prod.category === categoryId))
  //    }else{
  //      setProductos(res)
  //    }
  //  })
  //  .catch((error)=> console.log(error, 'Error'))
  //  .finally(()=>setLoading(false))
  // },[categoryId])

  //Firebase

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

  const addData = () =>{
    const collectionProd = collection (db,"productos")
    productosData.map((item)=> addDoc(collectionProd,item))
  }

  if (loading){
    return(
      <Loader/>
    )
  }

  return(
    <div className='container2'>
      {categoryId ?<h1 className='banner-1'>{greetting} <span className='banner-category'>{categoryId}</span></h1> :<h1 className='banner-2'>{greetting}</h1>
      }
      {/* <button onClick={addData}>Agregar productos</button> */}
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;