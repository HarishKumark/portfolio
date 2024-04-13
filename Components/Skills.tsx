import React from 'react'
import SkillItems from './SkillItems'
import SkillLanguages from './SkillLanguages'

function Skills() {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem]'>

            <h1 className='heading'>Education & <span className='text-yellow-400'>
                Skills</span></h1>

            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkillItems title="Java Developer" year="2022" />
                    <SkillItems title="Java Developer" year="2020-2022" />
                    <SkillLanguages skills1="Java" skills2="Java2" skills3="Java3" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div>
                    <SkillItems title="Java Developer" year="2019" />
                    <SkillItems title="Java Developer" year="2020-2022" />
                    <SkillLanguages skills1="Java" skills2="Java2" skills3="Java3" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div>
                    <SkillItems title="Java Developer" year="2018" />
                    <SkillItems title="Java Developer" year="2020-2022" />
                    <SkillLanguages skills1="Java" skills2="Java2" skills3="Java3" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
                <div>
                    <SkillItems title="Java Developer" year="2016" />
                    <SkillItems title="Java Developer" year="2020-2022" />
                    <SkillLanguages skills1="Java" skills2="Java2" skills3="Java3" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
                </div>
            </div>
        </div>
    )
}

export default Skills