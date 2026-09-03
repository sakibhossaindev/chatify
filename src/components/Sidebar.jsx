import React from 'react'
import Image from './Image'
import Photo1 from '../assets/profile.png'


const Sidebar = () => {
  return (
    <div className='w-[186px] h-[954px] bg-red-600'>
      <div className='bg-blue-800 w-[100px] h-[100px] mx-auto rounded-[50%] overflow-hidden'>
        <Image src={Photo1}/>
      </div>
    </div>
  )
}

export default Sidebar 