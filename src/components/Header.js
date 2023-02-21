import React from 'react'
import {FaBars} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <nav>
        {/* top-nav */}
        <div className=''>
            <div className=' flex justify-between items-center h-[2.5rem] w-[90%] mx-auto'>
                <div className='w-[4rem] justify-between items-center flex'>
                    <p>buy</p>
                    <p>sell</p>
                </div>
                <button className='bg-blue py-1 px-6 rounded-full text-white'>Get Started</button>
            </div>
        </div>
        {/* end-nav */}
        <div className='bg-yellow'>
            <div className='flex justify-between items-center h-[2.7rem] w-[90%] mx-auto'>
                <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia" className='h-[1.7rem] w-[1.7rem]' />
                <div className='hidden md:flex justify-between w-[40%] '>
                    <NavLink to={'/'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}}>Home</NavLink>
                    <a href='https://dukiagoldrefinery.co' target='_blank' rel="noreferrer">About</a>
                    <NavLink to={'/goldbars'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'black'}}}>Buy Gold</NavLink>
                    <NavLink to={'/goldcoins'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'black'}}}>Buy Coin</NavLink>
                </div>
                <div className='flex w-[30%] justify-between md:w-[10%]'>
                    <AiOutlineShoppingCart size={'1.3rem'}/>
                    <AiOutlineShoppingCart size={'1.3rem'}/>
                    <FaBars size={'1.3rem'} className='md:hidden'/>
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Header