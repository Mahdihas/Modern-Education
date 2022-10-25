// import React from 'react'
// import { useLoaderData } from 'react-router-dom';
// import DetailsCard from '../detailCard/DetailsCard';
// import { FaMinus } from "react-icons/fa";
// import { FaCloudDownloadAlt } from "react-icons/fa";




// const Details = () => {
//   const data = useLoaderData()


//   console.log(data);

  


//   return (
//     <div className="">
//       <h1 className='py-4'> <span className="mb-5 text-4xl font-bold"> Download Our Courses details <br /> in PDF </span>      <button className='btn bg-pink-400'><FaCloudDownloadAlt className='mx-2'></FaCloudDownloadAlt>Download</button>
// </h1>
//       <h1 className='text-center text-[#dc3545]'>        <FaMinus className='text-center  text-2xl  mx-auto'></FaMinus></h1>


//        <div className='px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4'>


// {
//   data.map(topics=><DetailsCard key={topics.id} topics={topics}></DetailsCard>)
// }

// </div>
//    </div>
//   )
// }

// export default Details