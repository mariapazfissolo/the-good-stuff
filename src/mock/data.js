const productos = [
    {
        id:'1',
        name: 'Nike Dunk Low',
        stock: 4,
        price: 169.999,
        description: 'El Nike Dunk Low es esencial para tu armario. Este ícono del básquetbol de mediados de los 80 regresa con una confección superduradera y los colores del original. La almohadilla en el tobillo y la tracción de goma lo convierten en todo un éxito.',
        imagen:'https://i.postimg.cc/DzGm2bHX/nike-panda-der.jpg',
        category:'Hombre',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'2',
        name: 'Nike Dunk Low Verde',
        stock: 3,
        price: 209.999,
        description: 'No todo lo que brilla es oro. Confeccionado con una espléndida tela suave y satinada, el Dunk Low es más elegante que el calzado común y lo suficientemente deportivo como para un atuendo informal. ',
        imagen:'https://i.postimg.cc/8cG93qQY/DX5931-100-A-PREM.jpg',
        category:'Mujer',
        genero:'Zapatillas de Moda para Mujer',
    },
    {
        id:'3',
        name: 'Nike Dunk Low "Mica Green"',
        stock: 9,
        price: 205.999,
        description: 'Cuero texturizado. Lona premium. Colores frescos. Este Dunk Low es un estilo discreto que añade el brillo perfecto a tu look. Con su estilo de básquetbol retro y cuello cómodo de corte low, mantuvimos todo lo que amas de este básico de estilo moderno. ¿Un toque final? Las agujetas con colores a juego traen la alegría a cada paso.',
        imagen:'https://i.postimg.cc/wMKRdQ0Z/DV7212-300-A-PREM.jpg',
        category:'Hombre',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'4',
        name: 'Nike Dunk High',
        stock: 6,
        price: 229.999,
        description: 'Desde los tableros hasta el skateboard, la influencia del Nike Dunk es innegable. Aunque se presentó como un calzado de básquetbol en 1985, la suela plana y adherente es perfecta para una comunidad deportiva desatendida: los skaters. Al revelar una subcultura que anhela la creatividad tanto como la funcionalidad, el Dunk lanzó décadas de incontables gamas de colores que continúan capturando el alma de los skaters de costa a costa.',
        imagen:'https://i.postimg.cc/kGD1k9Yf/DD1869-107-A-PREM.jpg',
        category:'Oportunidades',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'5',
        name: 'Nike Dunk Low Rosa',
        stock: 6,
        price: 210.999,
        description: 'El ícono del básquetbol de los 80, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos perfectamente brillantes y colores del equipo clásicos. Con su diseño icónico de básquetbol, el clásico Nike Dunk Low canaliza el espíritu vintage de la década de los 80 y vuelve a las calles, Datos del producto •Cuello de corte low •Plantilla de espuma Color: Blanco/Susurro Rosa Estilo:DD1503-118 Origen: Indonesia',
        imagen:'https://i.postimg.cc/TwD26y74/DD1503-118-A-PREM.jpg',
        category:'Hombre',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'6',
        name: 'Nike Air Force 1 .07',
        stock: 11,
        price: 150.999,
        description: 'ESTILO LEGENDARIO Y REFINADO. El fulgor vive en Nike Air Force 1 ’07, el icono del basquetbol que le da un toque fresco a las caracteristicas mas recordadas: colores audaces y la cantidad perfecta de destellos para que brilles.',
        imagen:'https://i.postimg.cc/vT0N2h7F/CW2288-111-A-PREM-hei-3144-wid-3144-fmt.jpg',
        category:'Oportunidades',
        genero:'Zapatillas de Moda para Hombre',
    }
]
export const getProducts = () =>{
    let error = false
    
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
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
                let product = productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },1000)
    })
}