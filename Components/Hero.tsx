import React from 'react'
import TextEffects from './TextEffects'
import Image from 'next/image'
// import Particle from './Particle'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'

function Hero() {
    return (
        <div className="h-[88vh] bg-cover bg-center">
            {/* <Particle /> */}
            <div className='w-[80%] grid-cols-1 mx-auto grid 
            lg:grid-cols-2 gap-[3rem] h-[100%] items-center '>
                <div>
                    <h1 className='text-[35px]
                     md:text-[50px] text-black font-bold'>Hi I'm
                        <span className='text-yellow-400'> Harish Kumar </span></h1>
                    <TextEffects />
                    <p className='mt-[1.5rem] text-[18px] text-black'>
                        ssdfsdfsfdsdf fsdfsfddsf sdfsdfsdf sdfsdffsd afsfdf
                        ssdfsdfsfdsdf fsdfsfddsf sdfsdfsdf sdfsdffsd afsfdf
                        ssdfsdfsfdsdf fsdfsfddsf sdfsdfsdf sdfsdffsd afsfdf
                        ssdfsdfsfdsdf fsdfsfddsf sdfsdfsdf sdfsdffsd afsfdf
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>

                        <button className='px-[2rem] hover:bg-yellow-400 
                        transition-all duration-300 py-[1rem] text-[18px] 
                        font-bold uppercase bg-gray-800 text-black flex items-center space-x-2'>
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
                        </button>

                    </div>
                </div>

                <div className='w-[300px] mx-auto left-[5rem]
             bg-black relative lg:flex
              items-center rounded-full h-[500px]'>
                    <Image src="/images/DSC_9502.png" alt='user'
                        layout='fill' className='object-cover rounded-full' />
                </div>
            </div>



        </div>
    )
}

export default Hero