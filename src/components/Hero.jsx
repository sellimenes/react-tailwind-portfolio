import React from 'react'
import Nav from './Nav'
import logo from '../images/see-me.jpg'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const Hero = () => {
  return (
    <>
        <Nav />
        <div className='hero-bg h-screen flex flex-col lg:flex-row lg:gap-20 items-center justify-center sm:pt-24'>
            <div className='flex justify-center border-2 border-white rounded-full w-2/3 sm:w-3/5 sm:border-4 sm:max-w-sm 2xl:max-w-xl'>
                <img src={logo} alt="me" className='rounded-full p-2 md:max-w-sm 2xl:max-w-xl'/>
            </div>
            <div className='pt-14 text-white sm:pt-4'>
                <h5 className='text-2xl pl-1 sm:text-4xl 2xl:text-6xl'>My name is</h5>
                <h2 className='text-6xl sm:text-8xl 2xl:text-9xl'>Selim Enes</h2>
                <h6 className='text-md text-slate-800 pl-1 sm:text-2xl 2xl:text-4xl'>Front-end Developer</h6>
            </div>
            <div className='flex gap-6 absolute bottom-10'>
                <BsGithub className='fill-white' size={36}/>
                <BsLinkedin className='fill-white' size={36}/>
                <BsInstagram className='fill-white' size={36}/>
            </div>
        </div>
        
    </>
  )
}

export default Hero