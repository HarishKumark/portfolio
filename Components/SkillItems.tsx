import React from 'react'

interface Props {
    title: string
    year: string
}
function SkillItems({ title, year }: Props) {
    return (
        <div className='mb-[4rem] md:mb-[8rem]'>
            <span className='px-[2rem] py-[1rem] text-black
             font-bold text-[18px] border-[2px] border-[#55e6a5]'>
                {year}
            </span>
            <h1 className='mt-[2rem] font-semibold mb-[1rem] text-[20px]
             sm:text-[25px] md::text-[30px] uppercase'>
                {title}
            </h1>
            <p className='
             text-black opacity-80 font-normal w-[88%] text-[17px]'>
                hfdgsfdfgdsdgdfhgd
                hfdgsfdfgdsdgdfhgd rteesfdgfdfsdgfh
                hfdgsfdfgdsdgdfhgd rteesfdgfdfsdgfh dfsggfvdgetewsgfhkturty
                dfsggfvdgetewsgfhkturty rteesfdgfdfsdgfh dfsggfvdgetewsgfhkturty
            </p>
        </div>
    )
}

export default SkillItems