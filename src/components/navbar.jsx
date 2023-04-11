import logo from '../images/logo.svg'

import hamburger from '../images/icon-hamburger.svg'
const Navbar = () => {
    return (  
        <>
        <div>
            <nav className='flex bg-white justify-between p-4'>
                <img src={logo} alt="asset" srcSet="" />
                <img src={hamburger} alt="asset" srcSet="" />
            </nav>
        </div>
        </>
    );
}
 
export default Navbar;