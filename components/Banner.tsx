import React from 'react'

const Banner = () => {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black'>
        <div className='p-4 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptas voluptates. Quas vitae accusantium quaerat delectus soluta sunt eius a!</h2>
        </div>
        <img src="https://iconape.com/wp-content/files/gc/11611/png/medium-m.png" alt="m" className='hidden md:inline-flex h-48 lg:h-80'/>
    </div>
  )
}

export default Banner