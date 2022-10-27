import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaCalendarAlt ,FaDollarSign} from "react-icons/fa";

import { Link } from 'react-router-dom';
import { FaMinus } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaGem } from "react-icons/fa";


const CheckoutRoute = () => {

  const topics = useLoaderData()

  const { img, details, time, rating,total_view, Teacher, profie, title, about, _id } = topics;
  
  // console.log(topics);
  
  return (
    <div className='py-4'> <div>
      <div className="card card-compact w-full sm:w-[70%] lg:w-[60%] mx-auto mt-6 py-6  bg-base-100 shadow-xl">
<figure><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
<div  className="card-body">
          <h2 className="card-title   text-[#373737] font-bold capitalize">{title}</h2>
          <div className=" flex justify-center items-center">          <img className='w-[50px] mx-6 h-[50px] rounded-full' src={profie} alt="" />
          <h2 className="card-title text-[#373737] font-bold">Teacher : {Teacher}</h2>

</div>

    
          <h2 className='w-[150px] flex items-center'><FaCalendarAlt></FaCalendarAlt> <span className='px-4'>{time}</span> </h2>
          <h2 className='w-[150px] font-bold  flex items-center'>  Price : <span className='flex justify-center items-center px-4'>{total_view}<FaDollarSign></FaDollarSign></span> </h2>

       
            <h2 className=' flex items-center text-yellow-500'>Rating : <FaGem className='mx-2'></FaGem>  <FaGem className='mx-2'></FaGem>  <FaGem className='mx-2'></FaGem> { rating.number}</h2>

            <p className='text-start'><span className='font-bold text-1xl'>Description :</span> {details}</p>
            <p className='text-start'><span className='font-bold text-1xl'>Do hardwork :</span> { about}</p>

          <div className="card-actions justify-center">
          <button className="btn w-[100%] sm:w-[50%] bg-[#dc3545] my-4"> Join Now  </button>

      


</div>
</div>
</div>

</div>
</div>

    

  )
}

export default CheckoutRoute