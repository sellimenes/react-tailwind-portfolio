import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='text-white'>
        <div className='bg-slate-800 flex flex-col items-center justify-center py-5'>
            <h1 className='text-6xl font-bold'>LOGO</h1>
            <h3 className='pt-6 text-xl md:text-2xl'>Social Links</h3>
            <ul className='flex gap-5 pt-3 pb-2'>
                <li><a href="#"><BsGithub size={22}/></a></li>
                <li><a href="#"><BsInstagram size={22}/></a></li>
                <li><a href="#"><BsLinkedin size={22}/></a></li>
            </ul>
        </div>
        <div className='py-1 bg-black text-center'>
            All rights reserved. Made with 💙 by SEE.
        </div>
    </footer>
  )
}

export default Footer