import React from 'react'
import {FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div className='w-[90%] mx-auto py-10 md:flex justify-around items-center'>
            <img src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675667595/dukia-Gold-Maple-Leaf-1-oz-Coin_bslgny.jpg" alt="gold" className='hidden md:flex w-[25%]'/>
            <div className='grid gap-6 place-items-center md:w-[60%]'>
                <h3 className='text-blue'>Subscribe to our Newsletter</h3>
                <form className='grid gap-4 w-full place-items-center'>
                    <input type="text" className='border border-gray-300 w-[90%] py-1 px-2 outline-none rounded-md'/>
                    <button className='bg-blue text-white w-[50%] py-1 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='w-[90%] mx-auto py-6'>
            <div className='uppercase flex justify-between text-xs pt-2'>
                <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia-logo" className='hidden md:block w-[5rem]'/>
                <div className='grid gap-2'>
                    <h4 className='text-blue font-bold'>visit</h4>
                    <p>adress goes here</p>
                    <p>Opening time goes here</p>
                </div>
                <div className='grid'>
                    <h4 className='text-blue font-bold'>follow</h4>
                    <div className='flex w-[4rem]  justify-between'>
                        <FaInstagramSquare size={'1rem'} className='text-blue'/>
                        <FaFacebookSquare size={'1rem'} className='text-blue'/>
                        <FaTwitterSquare size={'1rem'} className='text-blue'/>
                    </div>
                </div>
                <div className='grid gap-2'>
                    <h4 className='text-blue font-bold'>contact</h4>
                    <p>Phone number here</p>
                    <p>email here</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center text-xs py-2 border-t'>
            <AiOutlineCopyright size={'1rem'}/>
            <p className='pl-1'>Copyright {new Date().getFullYear()} Dukia Gold</p>
        </div>
    </footer>
  )
}
export default Footer