import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div className='pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto  gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] font-bold uppercase mb-[1rem]'>
                        About me
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[2rem] capitalize mb-[3rem] font-bold text-black '>
                        Java developer
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-800' >
                        </span>
                        <p className='text-[19px] text-slate-900 w-[80%] mt-[1.5rem]'>
                            sfdsdfsdfgertertrtyrtyrt rtyrtydghfghgsfadsfsgfdsgf etrwtthgdfs sadfsgdhyetrsgfhg gdsfda
                            sfdsdfsdfgertertrtyrtyrt rtyrtydghfghgsfadsfsgfdsgf
                            sfdsdfsdfgertertrtyrtyrt rtyrtydghfghgsfadsfsgfdsgf etrwtthgdfs sadfsgdhyetrsgfhg gdsfda
                            etrwtthgdfs sadfsgdhyetrsgfhg gdsfda
                        </p>
                    </div>
                    <button className='px-[2rem] hover:bg-yellow-400 
                        transition-all duration-300 py-[1rem] text-[18px] 
                        font-bold uppercase bg-gray-800 text-black flex items-center space-x-2'>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default About