import React, { useRef } from 'react'


import { FaCalendarAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaMinus } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';



const DetailsCard = ({ topics }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  
  });

  
  const { img, details, time,rating,Teacher, title,about, _id } = topics;
  

  return (
    <div className='text-center'>
     < h1 className='py-4'> <span className="mb-5 text-center text-4xl font-bold"> Download Our Courses details <br /> in PDF </span>      <button onClick={handlePrint} className='btn bg-pink-400'><FaCloudDownloadAlt className='mx-2'></FaCloudDownloadAlt>Download</button>
</h1>
      <h1 className='text-center text-[#dc3545]'>        <FaMinus className='text-center  text-2xl  mx-auto'></FaMinus></h1>


      <div>
    <div className="card card-compact w-full sm:w-[70%] lg:w-[60%] mx-auto mt-6 py-6  bg-base-100 shadow-xl">
<figure><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
<div ref={componentRef} className="card-body">
            <h2 className="card-title text-[#373737] font-bold capitalize">{title}</h2>
            <h2 className="card-title text-[#373737] font-bold">Teacher : {Teacher}</h2>

    
            <h2 className='w-[150px] flex items-center'><FaCalendarAlt></FaCalendarAlt> <span className='px-4'>{time}</span> </h2>
       
            <h2 className=' flex items-center text-yellow-500'>Rating : <FaGem className='mx-2'></FaGem>  <FaGem className='mx-2'></FaGem>  <FaGem className='mx-2'></FaGem> { rating.number}</h2>

            <p className='text-start'><span className='font-bold text-1xl'>Description :</span> {details}</p>
            <p className='text-start'><span className='font-bold text-1xl'>Do hardwork :</span> { about}</p>

          <div className="card-actions justify-center">
          <button className="btn w-[100%] sm:w-[50%] bg-[#dc3545] my-4">  <Link className='' to={`/checkoutRout/${topics._id}`}>Get Premium Access </Link> </button>

      


</div>
</div>
</div>

    
</div></div>
  )
}

export default DetailsCard