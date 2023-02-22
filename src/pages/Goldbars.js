import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Simlarproduct from '../components/Simlarproduct';
import {data} from '../Data/GoldbarData';
const Goldbars = () => {
  return (
    <main>
      <div className='w-[90%] mx-auto'>
        <Breadcrumb/>
        <div className='py-[2rem] grid gap-[2rem] sm:grid-cols-2 lg:grid-cols-3 justify-center sm:justify-between items-center'>
          {data.map(gold=>{
            return (
              <div key={gold.id} className='sm:w-[100%] h-[23rem] shadow-md mx-auto flex flex-col items-center justify-around px-[4rem] rounded-md'>
                <div className='grid justify-center items-center'>
                  <img src={gold.image} alt={gold.title} className='w-[8rem] h-[13rem] mx-auto object-contain'/>
                  <h5>{gold.heading}</h5>
                  <button className='bg-blue py-2 text-white rounded-md'>Add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Simlarproduct/>
    </main>
  )
}

export default Goldbars