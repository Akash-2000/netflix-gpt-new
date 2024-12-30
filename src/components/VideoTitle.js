import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='pt-[270px] px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <p className='text-6xl font-bold py-5'>{title}</p>
        <p className='text-xl w-1/4'>{description?.slice(0,150)}...</p>
        <div className='mt-3'>
            <button className='p-4 px-14 bg-white text-black rounded-md mr-2 hover:bg-opacity-80'>
               ▶️ Play
            </button>
            <button className='p-4 px-14 bg-gray-500 text-white rounded-md'>
               More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle