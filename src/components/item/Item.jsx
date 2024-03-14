import './item.css'
import {Link} from 'react-router-dom'


const Item = ({producto}) => {

    return(
        <Link to={`/item/${producto.id}`} className='link-producto' >
        <img src={producto.imagen} className='card-img-top' alt={producto.name}/>
        <div className="card-body">
          <h5 className='nombre'>{producto.name}</h5>
          <p className='genero'>{producto.genero}</p>
          <p className="precio">${producto.price}</p>
        </div>
      </Link>
    )
}
export default Item