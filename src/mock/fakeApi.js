const productos = [
    {
        id:'1',
        name: 'Nike Dunk Low',
        stock: 10,
        price: 169.000,
        description: 'El Nike Dunk Low es esencial para tu armario. Este ícono del básquetbol de mediados de los 80 regresa con una confección superduradera y los colores del original. La almohadilla en el tobillo y la tracción de goma lo convierten en todo un éxito.',
        imagen:'https://i.postimg.cc/DzGm2bHX/nike-panda-der.jpg',
        categoria:'nuevos',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'2',
        name: 'Nike Dunk Low Verde',
        stock: 6,
        price: 209.999,
        description: 'lorem10',
        imagen:'https://i.postimg.cc/8cG93qQY/DX5931-100-A-PREM.jpg',
        categoria:'más vendidos',
        genero:'Zapatillas de Moda para Mujer',
    },
    {
        id:'3',
        name: 'Nike Dunk Low "Mica Green"',
        stock: 9,
        price: 10,
        description: 'lorem10',
        imagen:'https://i.postimg.cc/wMKRdQ0Z/DV7212-300-A-PREM.jpg',
        categoria:'ofertas',
        genero:'Zapatillas de Moda para Mujer',
    },
    {
        id:'4',
        name: 'Nike Dunk High',
        stock: 13,
        price: 229.999,
        description: 'lorem10',
        imagen:'https://i.postimg.cc/kGD1k9Yf/DD1869-107-A-PREM.jpg',
        categoria:'ofertas',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'5',
        name: 'Nike Dunk Low Rosa',
        stock: 1,
        price: 100,
        description: 'lorem10',
        imagen:'https://i.postimg.cc/TwD26y74/DD1503-118-A-PREM.jpg',
        categoria:'ofertas',
        genero:'Zapatillas de Moda para Hombre',
    },
    {
        id:'6',
        name: 'Nike Air Force 1 07',
        stock: 11,
        price: 100,
        description: 'lorem10',
        imagen:'https://i.postimg.cc/vT0N2h7F/CW2288-111-A-PREM-hei-3144-wid-3144-fmt.jpg',
        categoria:'ofertas',
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