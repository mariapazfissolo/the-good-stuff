import React from 'react'
import './itemListContainer.css'
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'

function ItemListContainer ({greetting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()
    
  useEffect(()=>{
    getProducts()
    .then((res)=> {
      if (categoryId){
        setProductos(res.filter((prod)=> prod.category === categoryId))
      }else{
        setProductos(res)
      }
    })
    .catch((error)=> console.log(error, 'Error'))
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