import React from 'react'

import { Link} from 'react-router-dom'


const RightSide = ({ category }) => {
  
  const { name } = category;
  return (
    <div>
      <Link to={'/details'} className='font-bold text-green-500'>{name}</Link>

    </div>
  )
}

export default RightSide