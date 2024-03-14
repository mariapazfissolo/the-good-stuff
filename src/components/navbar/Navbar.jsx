import './navbar.css'
import CartWidget from '../cartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navContainer'>
            <NavLink className='logo' to='/'>The Nike Stuff</NavLink>
            <div className='linksContainer'>
                <NavLink className='link' to='/categories/Hombre'>Hombre </NavLink>
                <NavLink className='link' to='/categories/Mujer'>Mujer </NavLink>
                <NavLink className='link' to='/categories/Oportunidades'>Oportunidades</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;