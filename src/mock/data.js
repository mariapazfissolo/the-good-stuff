export const productosData = [
    {
        name: 'Nike Dunk High',
        stock: 6,
        price: 229.999,
        description: 'Desde los tableros hasta el skateboard, la influencia del Nike Dunk es innegable. Aunque se presentó como un calzado de básquetbol en 1985, la suela plana y adherente es perfecta para una comunidad deportiva desatendida: los skaters. Al revelar una subcultura que anhela la creatividad tanto como la funcionalidad, el Dunk lanzó décadas de incontables gamas de colores que continúan capturando el alma de los skaters de costa a costa.',
        imagen:'https://i.postimg.cc/kGD1k9Yf/DD1869-107-A-PREM.jpg',
        category:'Oportunidades',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        name: 'Nike Dunk Low Rosa',
        stock: 6,
        price: 210.999,
        description: 'El ícono del básquetbol de los 80, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos perfectamente brillantes y colores del equipo clásicos. Con su diseño icónico de básquetbol, el clásico Nike Dunk Low canaliza el espíritu vintage de la década de los 80 y vuelve a las calles, Datos del producto •Cuello de corte low •Plantilla de espuma Color: Blanco/Susurro Rosa Estilo:DD1503-118 Origen: Indonesia',
        imagen:'https://i.postimg.cc/TwD26y74/DD1503-118-A-PREM.jpg',
        category:'Hombre',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        name: 'Nike Air Force 1 .07',
        stock: 11,
        price: 150.999,
        description: 'ESTILO LEGENDARIO Y REFINADO. El fulgor vive en Nike Air Force 1 ’07, el icono del basquetbol que le da un toque fresco a las caracteristicas mas recordadas: colores audaces y la cantidad perfecta de destellos para que brilles.',
        imagen:'https://i.postimg.cc/vT0N2h7F/CW2288-111-A-PREM-hei-3144-wid-3144-fmt.jpg',
        category:'Oportunidades',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        name: 'Nike Dunk Low Esme',
        stock: 2,
        price: 209.999,
        description: 'El ícono del básquetbol de los 80, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos perfectamente brillantes y colores del equipo clásicos. Con su diseño icónico de básquetbol, el clásico Nike Dunk Low canaliza el espíritu vintage de la década de los 80 y vuelve a las calles, al tiempo que su cuello acolchado de corte low te permite llevar tu juego a cualquier lugar con comodidad.',
        imagen:'https://i.postimg.cc/mDNgftjp/image.jpg',
        category:'Oportunidades',
        genero:'Zapatillas de Moda para Mujer',
    },
    {
        name: 'Air Jordan 1 Low',
        stock: 7,
        price: 309.999,
        description: 'Siempre a la moda, siempre fresca. El Air Jordan 1 Low te ofrece una parte de la historia y herencia Jordan con una comodidad que dura todo el día. Elige tus colores y sal con el perfil icónico creado con una combinación de materiales de alta calidad y Air encapsulado en el talón.',
        imagen:'https://i.postimg.cc/vH1w549R/image.jpg',
        category:'Mujer',
        genero:'Zapatillas de Moda para Mujer',
    },
    {
        name: 'Air Jordan 1 Mid SE',
        stock: 5,
        price: 259.999,
        description: 'El bordado de lujo y la paleta tenue aportan una sensación de frescura discreta al AJ1 Mid. La edición especial Swoosh agrega un toque de brillo a un calzado que se ve bien (y se siente bien) sin importar dónde lo uses.La amortiguación Nike Air en el talón crea una amortiguación ligera y flexible y la confección de la suela cupsole ofrece soporte de perfil bajo, además la suela de goma sólida cuenta con ranuras flexibles en el antepié para brindar soporte al movimiento natural.',
        imagen:'https://i.postimg.cc/zvhZZMqz/image.jpg',
        category:'Hombre',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        name: 'Nike Air Force 1 07 LV8',
        stock: 8,
        price: 239.999,
        description: 'El fulgor sigue vive en el Air Force 1 07 LV8. Al combinar la comodidad de la cancha con un estilo fuera de la cancha, este calzado agrega un toque de estilo ingenioso a un modelo original de básquetbol. La gamuza suave y la confección que conmemora la era de los 80 agregan un estilo de básquetbol total',
        imagen:'https://i.postimg.cc/C555GwCv/image.jpg',
        category:'Mujer',
        genero:'Zapatillas de Moda para Mujer',
    }

]
export const getProducts = () =>{
    let error = false
    
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productosData)
                }
        },1000)
    })
    
}
export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('El producto no existe')
            }else{
                let product = productosData.find((prod)=> prod.id === id)
                resolve(product)
            }
        },1000)
    })
}