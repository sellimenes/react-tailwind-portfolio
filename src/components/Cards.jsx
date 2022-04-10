import React from 'react'
import htmlicon from '../images/html-icon.png'
import cssicon from '../images/css-icon.png'
import reacticon from '../images/react-icon.png'
import tailwindicon from '../images/tailwind-icon.webp'


const Cards = () => {
  return (
    <div className='w-screen md:pt-5'>
        <div className='px-10 flex gap-2 md:gap-4 justify-center'>
            <div className='w-16 h-12 bg-slate-50 rounded-xl shadow-2xl hover:-translate-y-2 transition flex flex-col items-center justify-center md:w-24 md:h-24'>
                <img src={htmlicon} alt="html icon" className='w-6 md:w-12'/>
                <h5 className='text-slate-800 font-semibold text-xs md:text-lg'>HTML</h5>
            </div>
            <div className='w-16 h-12 bg-slate-50 rounded-xl shadow-2xl hover:-translate-y-2 transition flex flex-col items-center justify-center md:w-24 md:h-24'>
                <img src={cssicon} alt="html icon" className='w-6 md:w-12'/>
                <h5 className='text-slate-800 font-semibold text-xs md:text-lg'>CSS</h5>
            </div>
            <div className='w-16 h-12 bg-slate-50 rounded-xl shadow-2xl hover:-translate-y-2 transition flex flex-col items-center justify-center md:w-24 md:h-24'>
                <img src={reacticon} alt="html icon" className='w-6 md:w-12 pt-1'/>
                <h5 className='text-slate-800 font-semibold text-xs md:text-lg'>React</h5>
            </div>
            <div className='w-16 h-12 bg-slate-50 rounded-xl shadow-2xl hover:-translate-y-2 transition flex flex-col items-center justify-center md:w-24 md:h-24'>
                <img src={tailwindicon} alt="html icon" className='w-6 md:w-12 pt-1'/>
                <h5 className='text-slate-800 font-semibold text-xs md:text-lg pt-1'>Tailwind</h5>
            </div>
        </div>
    </div>   
  )
}

export default Cards