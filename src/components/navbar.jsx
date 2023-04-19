import logo from '../images/logo.svg'

import hamburger from '../images/icon-hamburger.svg'
import Button from './button';
const Navbar = () => {
    return (  
        <>
        <div>
            <nav className='flex w-full bg-white justify-between p-4'>
                <div className='w-[20%] '>
                    <img src={logo} alt="asset" srcSet="" />
                </div>
                <ul className='flex justify-between w-[35%]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
                <div className='w-[35%] '>
                    <Button/>
                </div>
                {/* <img src={hamburger} alt="asset" srcSet="" /> */}
            </nav>
        </div>
        </>
    );
}
 
export default Navbar;