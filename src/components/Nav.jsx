import React from 'react'

const Nav = () => {
  return (
    <nav className='text-center pt-4 absolute flex justify-center flex-col w-full text-white'>
        <h1 className='text-5xl font-bold sm:text-8xl'>SEE.</h1>
        <ul className='flex justify-center gap-5 pt-3 sm:text-2xl'>
            <li><a href="#aboutme">About Me</a></li>
            <li>My Works</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav