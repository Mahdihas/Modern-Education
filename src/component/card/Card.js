import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ category }) => {
    const { img,id , name} = category;
  return (
      <div className='py-4'>
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title text-[#373737] font-bold">{ name}</h2>
    <div className="card-actions justify-center">
    <button className="btn w-[100%] sm:w-[50%] bg-[#dc3545] my-4">  <Link className='' to={`/topics/${category.id}`}>See Details </Link> </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Card