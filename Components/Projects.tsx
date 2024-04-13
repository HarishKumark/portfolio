import Image from 'next/image'
import React from 'react'

function Projects() {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                Pro<span className='text-yellow-700'>ject</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div>
                    <div className='transform cursor-pointer 
                hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/logo.png" alt='portfolio' layout='fill' className='object-contain' />
                    </div>
                </div>

                <div>
                    <div className='transform cursor-pointer 
                hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/logo.png" alt='portfolio' layout='fill' className='object-contain' />
                    </div>
                </div>
                <div>
                    <div className='transform cursor-pointer 
                hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/logo.png" alt='portfolio' layout='fill' className='object-contain' />
                    </div>
                </div>

                <div>
                    <div className='transform cursor-pointer 
                hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image src="/images/logo.png" alt='portfolio' layout='fill' className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects