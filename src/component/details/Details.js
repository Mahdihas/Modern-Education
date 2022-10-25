import React from 'react'
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../detailCard/DetailsCard';
import { FaMinus } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";




const Details = () => {
  const data = useLoaderData()


  console.log(data);

  


  return (
    <div className="">
      
       <div className='px-4 py-6 '>


{
  data.map(topics=><DetailsCard key={topics.id} topics={topics}></DetailsCard>)
}

</div>
   </div>
  )
}

export default Details