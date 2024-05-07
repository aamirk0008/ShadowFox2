import React from 'react'
import logoPic from "../assets/rcb-logo.png";
const MyNavbar = () => {
  return (
    <div className='w-full h-18 bg-red-700 flex items-center text-white p-2 font-mono justify-around sticky top-0 z-50'>
        <div className="flex items-center gap-1 text-2xl ">
          <a href="/" className='flex items-center gap-1 hover:text-black hover:font-bold'>
            <img src={logoPic} className='w-12 h-14 drop-shadow-[0_0_7px_black] ' alt="logo" />
            <h2>Fans<span className='font-bold '>Mania</span></h2>
            </a>
        </div>
        <div className='flex items-center bg-black rounded-lg shadow-[0_0_55px_red]'>
            <input type="search" className='bg-transparent h-8 border-none' name="search" id="search" placeholder='Search...'/>
            <svg className="w-10 h-6 hover:text-red-700 cursor-pointer transition duration-300 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

        </div>
        <div className=''>
            <a href="/" className='px-6 hover:text-black font-bold transition duration-300'>Home</a>
            <a href="/fixtures" className='px-6 hover:text-black font-bold transition duration-300'>Fixtures</a>
            <a href="/points-table" className='px-6 hover:text-black font-bold transition duration-300'>PointsTable</a>
            <a href="#" className='px-6 hover:text-black font-bold transition duration-300'>Gallery</a>
        </div>
    </div>
  )
}

export default MyNavbar