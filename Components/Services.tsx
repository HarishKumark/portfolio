import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Services() {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='text-center text-black text-[28px]
         sm:text-[33px] md:text-[45px] font-bold uppercase'>
                My
                <span className='text-yellow-400'>
                    Service
                </span>
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto
items-center gap-[3rem] mt-[4rem]'>

                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>

                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-white' />

                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Frontend
                    </h1>
                    <p className='text-[15px] font-normal'>
                        this is the testing  this is the testing
                        this is the testing this is the testing this is the testing                    </p>
                </div>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>

                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-white' />

                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Backend
                    </h1>
                    <p className='text-[15px] font-normal'>
                        this is the testing  this is the testing
                        this is the testing this is the testing this is the testing                    </p>
                </div>
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>

                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-white' />

                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Fullstack
                    </h1>
                    <p className='text-[15px] font-normal'>
                        this is the testing  this is the testing
                        this is the testing this is the testing this is the testing                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services