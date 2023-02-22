import React from 'react'
import {FaBars} from 'react-icons/fa';
import {AiOutlineShoppingCart,AiOutlineLock,AiOutlineSearch} from 'react-icons/ai';
import {NavLink, Link} from 'react-router-dom';
const Header = () => {
  return (
    <nav className='sticky top-0 w-full z-[99] '>
        {/* top-nav */}
        <div className='bg-white'>
            <div className='flex justify-between items-center h-[2.5rem] w-[90%] mx-auto'>
                <div className='w-[4rem] justify-between items-center flex'>
                    <p>buy</p>
                    <p>sell</p>
                </div>
                <Link to='/register'><button className='bg-blue py-1 px-6 rounded-md text-white w-[10rem]'>Get Started</button></Link>
            </div>
        </div>
        {/* end-nav */}
        <div className='bg-yellow'>
            <div className='flex justify-between items-center h-[2.7rem] w-[90%] mx-auto'>
                <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia" className='h-[2rem] w-[2rem]' />
                <div className='hidden md:flex justify-between w-[40%] '>
                    <NavLink to={'/'} style={({isActive})=>{return {color : isActive ? 'white' : 'black'}}}>Home</NavLink>
                    <a href='https://dukiagoldrefinery.co' target='_blank' rel="noreferrer">About</a>
                    <NavLink to={'/goldbars'} style={({isActive})=>{return {color : isActive ? 'white' : 'black'}}}>Buy Gold</NavLink>
                    <NavLink to={'/goldcoins'} style={({isActive})=>{return {color : isActive ? 'white' : 'black'}}}>Buy Coin</NavLink>
                </div>
                <div className='flex w-[35%] justify-between md:w-[15%]'>
                    <AiOutlineSearch size={'1.3rem'}/>
                    <AiOutlineShoppingCart size={'1.3rem'}/>
                    <AiOutlineLock size={'1.3rem'}/>
                    <FaBars size={'1.3rem'} className='md:hidden'/>
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Header