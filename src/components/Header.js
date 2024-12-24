import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black w-full h-36 pl-32 pt-5 z-20'>
        <img src={LOGO} alt='logo' className='w-48'/>
    </div>
  )
}

export default Header