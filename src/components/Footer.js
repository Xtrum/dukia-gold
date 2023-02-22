import React from 'react'
import {FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <div className='w-[90%] mx-auto py-10'>
        <div className='grid gap-6 place-items-center'>
            <h3 className='text-blue'>Subscribe to our Newsletter</h3>
            <form className='grid gap-4 w-full place-items-center'>
                <input type="text" className='border border-black w-[90%] p-1 outline-none rounded-md'/>
                <button className='bg-blue text-white w-[10rem] py-1 rounded-md'>Subscribe</button>
            </form>
        </div>
        <div className='uppercase'>
            <div>
                <img src="" alt="" />
                <div>
                    <h4>visit</h4>
                    <p>adress goes here</p>
                    <p>Opening time goes here</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>follow</h4>
                    <FaInstagramSquare/>
                    <FaFacebookSquare/>
                    <FaTwitterSquare/>
                </div>
                <div>contact</div>
                <p>Phone here</p>
                <p>email here</p>
            </div>
        </div>
    </div>
    <p><AiOutlineCopyright/> Copyright {new Date().getFullYear()} Dukia Gold</p>
    </>
  )
}
export default Footer