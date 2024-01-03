import React from 'react'

export default function Card({number}) {
  return (
    <div className='h-[200px] w-[150px] rounded-lg flex justify-center items-center flex-col bg-[#5B5B5B]'>
       <h2 className='text-[white] text-lg font-Lato font-black'>{number}</h2>
    </div>
  )
}
