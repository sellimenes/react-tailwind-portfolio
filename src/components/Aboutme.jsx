import React from 'react'
import Cards from './Cards'

const Aboutme = () => {
  return (
    <section id='aboutme' className='py-10 bg-slate-800 text-white pt-10 flex justify-center items-center flex-wrap'>
        <div className='w-5/6 mx-auto pl-3 pr-5 flex flex-col justify-evenly lg:flex-row lg:items-center lg:pl-0 lg:justify-around'>
            <div className='flex flex-col gap-6 lg:w-7/12 md:pb-10'>
                <h2 className='text-2xl font-medium md:text-4xl'>About Me</h2>
                <p className='text-sm md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, neque beatae laborum quasi odio magnam quidem. Earum dignissimos vitae praesentium est error aliquid harum provident suscipit ad reiciendis, architecto, dolore repellendus amet esse, unde minus animi.</p>
                <p className='text-amber-300 text-2xl md:text-lg'>"You can do anything you set your mind."</p>
            </div>
                <div className='lg:w-4/12'>
                <div className='flex justify-between mb-1'>
                    <span className='text-base font-medium text-amber-300 md:text-2xl'>Front-end Development</span>
                    <span className='text-sm font-medium text-amber-300 md:text-xl'>80%</span>
                </div>
                <div className='bg-gray-200 rounded-full h-2 mb-5'>
                    <div className='bg-amber-300 h-2 rounded-full w-8/12'></div>
                </div>
                <div className='flex justify-between mb-1'>
                    <span className='text-base font-medium text-amber-300 md:text-2xl'>SEO</span>
                    <span className='text-sm font-medium text-amber-300 md:text-xl'>90%</span>
                </div>
                <div className='bg-gray-200 rounded-full h-2 mb-5'>
                    <div className='bg-amber-300 h-2 rounded-full w-10/12'></div>
                </div>
                <div className='flex justify-between mb-1'>
                    <span className='text-base font-medium text-amber-300 md:text-2xl'>Content Creation</span>
                    <span className='text-sm font-medium text-amber-300 md:text-xl'>95%</span>
                </div>
                <div className='bg-gray-200 rounded-full h-2 mb-5'>
                    <div className='bg-amber-300 h-2 rounded-full w-11/12'></div>
                </div>
            </div>
        </div>
        <Cards />
    </section>
  )
}

export default Aboutme