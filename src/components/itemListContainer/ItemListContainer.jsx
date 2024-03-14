import React from 'react'
import './itemListContainer.css'
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer ({greetting}) {
  const [productos, setProductos]=useState([])
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
  },[categoryId])

  return(
    <div className='container2'>
      {categoryId ?<h1 className='banner'>{greetting} <span className='banner-category'>{categoryId}</span></h1> :<h1 className='banner'>{greetting}</h1>}
             
    <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;