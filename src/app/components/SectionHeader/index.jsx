import React from 'react'

export default function SectionHeader({title, subtitle}) {
  return (
    <header className='w-full display flex items-center gap-[24px]  '>
        <span className='line bg-green h-[2px] w-[7%]  '></span>
        <div className=' '>
            <h2>{title}</h2>
            <p className='text-green font-[500] text-[12px] md:text-[20px]'>{subtitle}</p>
        </div>
    </header>
  )
}
