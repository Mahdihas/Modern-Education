import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaCalendarAlt} from "react-icons/fa";


const CheckoutRoute = () => {

  const topics = useLoaderData()
  const { img, details, time, title, _id } = topics;

  return (
    <div className='py-4'> <div>
    <div className="card card-compact w-[60%] mx-auto mt-6 py-6  bg-base-100 shadow-xl">
<figure><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
<div className="card-body ">
    <h2 className="card-title text-[#373737] font-bold">{title}</h2>
    
    <h2 className='w-[150px] flex items-center'><FaCalendarAlt></FaCalendarAlt> <span className='px-4'>{time}</span> </h2>

    <p className=''>{ details}</p>
          <div className="card-actions justify-center">
          <button className="btn w-[100%] sm:w-[50%] bg-[#dc3545] my-4"> Join Now</button>

      


</div>
</div>
</div>

    
</div></div>
  )
}

export default CheckoutRoute