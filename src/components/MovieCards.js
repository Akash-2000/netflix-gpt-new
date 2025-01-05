import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCards = ({poster_path}) => {
  if(!poster_path) return null
  return (
    <div className='w-48 mr-3'>
        <img src={IMAGE_CDN+poster_path} alt='movieImage' />
    </div>
  )
}

export default MovieCards