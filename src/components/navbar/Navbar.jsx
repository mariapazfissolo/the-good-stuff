import './navbar.css'
import CartWidget from '../cartWidget/CartWidget';
const Navbar = () => {
    return(
            <nav className='navContainer'>
                <a className='logo' href="/">The Nike Stuff</a>
                <div className='linksContainer'>
                    <a className='link' href="/">Hombre </a>
                    <a className='link' href="/">Mujer </a>
                    <a className='link' href="/">Destacados</a>
                </div>
                <CartWidget/>
                
            </nav>
    )
}

export default Navbar;