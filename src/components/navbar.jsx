import logo from '../images/logo.svg'
import close from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'
import Button from './button';
import { useRef, useState } from 'react';
const Navbar = () => {
   const [open,setOpen] = useState(false)
    return (  
        <>
        <div>
            <nav className='flex w-full md:p-[1%] bg-white justify-between'>
                <div className='md:w-[20%] mt-[5%] md:mt-0 '>
                    <img src={logo} alt="asset" srcSet="" />
                </div>
              <div className={`md:flex  p-[4%] md:p-[0%] block justify-around m-[0] left-[5%] md:left-0 md:m-0 md:static absolute w-[90%] top-[150%] md:top-0 rounded-[5%] text-center bg-white md:justify-between  ${open ? "block" : "hidden"}`}>
                <ul className='md:flex md:justify-between md:w-[35%]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                        
                </ul>
                    <div className='md:w-[55%] w-[100%]'>
                        <Button/>
                    </div>
              </div>
                
                <div className='cursor-pointer md:hidden text-3xl'>
                <button onClick={() => setOpen(!open)}>
                    {open?(<img src={close} alt="asset" srcSet="" />):
                    (<img src={hamburger} alt="asset" srcSet="" />)}
                </button>
                </div>
                
            </nav>
        </div>
        </>
    );
}
 
export default Navbar;