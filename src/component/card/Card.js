import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ category }) => {
    const { img,id , name,Teacher} = category;
  return (
      <div className='py-4'>
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
          <h2 className="card-title text-[#373737] font-bold">{name}</h2>
          <h2 className=' text-[#373737] font-bold'> Teacher : { Teacher}</h2>
    <div className="card-actions justify-center">
    <Link className='w-[100%]' to={`/topics/${category.id}`}> <button className="btn w-[100%] sm:w-[100%] bg-[#dc3545] my-4">  See Details </button></Link> 
    </div>
  </div>
</div>


    </div>
  )
}

export default Card