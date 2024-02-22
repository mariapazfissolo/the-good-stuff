import './navbar.css'
import CartWidget from '../cartWidget/CartWidget';
const Navbar = () => {
    return(
            <nav className='navContainer'>
                <a className='logo' href="/">The good stuff</a>
                <div className='linksContainer'>
                    <a className='link' href="/">MUJER </a>
                    <a className='link' href="/">HOMBRE </a>
                    <a className='link' href="/">SALE</a>
                </div>
                <CartWidget/>
                
            </nav>
    )
}

export default Navbar;