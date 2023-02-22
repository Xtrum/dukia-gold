import React from 'react'

const Shopcontent = () => {
  return (
    <section className='py-10 grid gap-[1rem] place-items-center text-center'>
        <h3 className='capitalize text-blue '>Shop by Category</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas labore sapiente enim natus harum ipsa? Rerum maxime fuga quam?</p>
        <div className='w-[5rem] h-[.2rem] bg-blue'></div>
        <div className='grid gap-[1rem] gap-col-[.5rem] sm:grid-cols-2 md:grid-cols-3'>
            <div className='border h-[100%] w-[70%] sm:w-[90%] mx-auto border-black flex justify-center items-center'>
                <img src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675707023/20-Grams-Philoro-Gold-Minted-Bar_plqdze.jpg" alt="" className='h-[60%] w-[50%]'/>
            </div>
            <div className='border h-[100%] w-[70%] sm:w-[90%] mx-auto border-black flex justify-center items-center'>
                <img src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675707023/20-Grams-Philoro-Gold-Minted-Bar_plqdze.jpg" alt="" className='h-[60%] w-[50%]'/>
            </div>
            <div className='border h-[100%] w-[70%] sm:w-[90%] mx-auto border-black flex justify-center items-center'>
                <img src="https://res.cloudinary.com/dcu3hr3eo/image/upload/v1675707023/20-Grams-Philoro-Gold-Minted-Bar_plqdze.jpg" alt="" className='h-[60%] w-[50%]'/>
            </div>
        </div>
    </section>
  )
}

export default Shopcontent