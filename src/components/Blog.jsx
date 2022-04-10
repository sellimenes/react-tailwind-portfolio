import React from 'react'
import blog1 from '../images/blog-post-1.webp'
import blog2 from '../images/blog-post-2.webp'

const Blog = () => {
  return (
    <section>
        <h5 className='p-5 text-2xl text-slate-800 text-center'>Latest News</h5>
        <div className='flex flex-col lg:flex-row lg:w-5/6 mx-auto gap-3 justify-center items-center pb-5'>
            <div className='my-post relative shadow-xl w-5/6 sm:w-fit'>
                <img src={blog1} alt="blog post" />
                <div className='absolute bottom-2 left-5 flex items-center gap-2 text-white flex-wrap gap-y-0'>
                    <div className='px-4 py-2 bg-amber-300 rounded-full text-slate-800 sm:text-xl lg:text-sm lg:px-2 lg:py-2 2xl:text-xl'>Category</div>
                    <h3 className='sm:text-3xl lg:text-2xl 2xl:text-3xl'>Title of the post</h3>
                    <p className='pl-2 pb-2 text-sm sm:text-lg lg:text-sm lg:pl-1 2xl:text-xl'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='my-post relative shadow-xl w-5/6 sm:w-fit'>
                <img src={blog2} alt="blog post" />
                <div className='absolute bottom-2 left-5 flex items-center gap-2 text-white flex-wrap gap-y-0'>
                    <div className='px-4 py-2 bg-amber-300 rounded-full text-slate-800 sm:text-xl lg:text-sm lg:px-2 lg:py-2 2xl:text-xl'>Category</div>
                    <h3 className='sm:text-3xl lg:text-2xl 2xl:text-3xl'>Title of the post</h3>
                    <p className='pl-2 pb-2 text-sm sm:text-lg lg:text-sm lg:pl-1 2xl:text-xl'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='my-post relative shadow-xl w-5/6 sm:w-fit'>
                <img src={blog1} alt="blog post" />
                <div className='absolute bottom-2 left-5 flex items-center gap-2 text-white flex-wrap gap-y-0'>
                    <div className='px-4 py-2 bg-amber-300 rounded-full text-slate-800 sm:text-xl lg:text-sm lg:px-2 lg:py-2 2xl:text-xl'>Category</div>
                    <h3 className='sm:text-3xl lg:text-2xl 2xl:text-3xl'>Title of the post</h3>
                    <p className='pl-2 pb-2 text-sm sm:text-lg lg:text-sm lg:pl-1 2xl:text-xl'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog