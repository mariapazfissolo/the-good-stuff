import './item.css'

const Item = ({producto}) => {
    return(
        <div className="card">
        <img src={producto.imagen} className='card-img-top' alt={producto.name}/>
        <div className="card-body">
          <h5 className='nombre'>{producto.name}</h5>
          <p className='genero'>{producto.genero}</p>
          <p className="precio">${producto.price}</p>
          <a href="#" className='btn-ver-mas'>Ver más</a>
        </div>
      </div>
    )
}
export default Item