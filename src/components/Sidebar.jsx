import React from 'react'
import Image from './Image'
import photo from '../assets/profile.jpg'

const Sidebar = () => {
  return (
    <div className='w-[186px] h-[954px] bg-red-600'>
      <div className='bg-blue-800 w-[100px] h-[100px] mx-auto rounded-[50%] overflow-hidden'>
        <Image src={photo} alt='Profile' />
      </div>
    </div>
  )
}

export default Sidebar