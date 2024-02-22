import './itemListContainer.css'
const ItemListContainer = ({greetting, saludo}) => {
    return(
        <div className='container2'>
            <div className='intro'>
                 <h1 className="bienvenida">{greetting}</h1>
                <h3 className='saludo'>{saludo}</h3> 
            </div>
            <div className='flower-power'>
                 <img className='flor' src="./images/flor.png" alt="loading sing"/>
            </div>
        </div>
    )
}

export default ItemListContainer;