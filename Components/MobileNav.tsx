import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

function MobileNav({ closeNav, nav }: Props) {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]"
    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-10 left-0 right-0 bottom-0 z-[10000] bg-slate-900`}>

            <div className='w-[100vw] h-[100vw] top-10 flex flex-col items-center justify-center'>
            <div className='nav-link-mobile'>Home</div>

            {/* <div className='nav-link-mobile'>Home</div>

                <div className='nav-link-mobile'>Home</div> */}
                <div className='nav-link-mobile'>Services</div>
                <div className='nav-link-mobile'>About</div>
                <div className='nav-link-mobile'>Project</div>
                <div className='nav-link-mobile'>Blog</div>
                <div className='nav-link-mobile'>Contact</div>
            </div>
            <div onClick={closeNav} className=' absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300'>
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav