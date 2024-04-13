import React from 'react'

interface Props {
    skills1: string
    skills2: string
    skills3: string

    level1: string
    level2: string
    level3: string
}
function SkillLanguages({
    skills1,
    skills2,
    skills3,
    level1,
    level2,
    level3

}: Props) {
    return (
        <div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase
             bg-slate-400 rounded-sm text-[20px] font-bold'>
                    {skills1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-black`}>

                </span>
            </div>

            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase
             bg-slate-400 rounded-sm text-[20px] font-bold'>
                    {skills2}
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-black`}>

                </span>
            </div>

            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase
             bg-slate-400 rounded-sm text-[20px] font-bold'>
                    {skills3}
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-black`}>

                </span>
            </div>

        </div>

    )
}

export default SkillLanguages