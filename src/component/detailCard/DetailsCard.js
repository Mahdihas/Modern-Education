// import React from 'react'


// import { FaCalendarAlt} from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const DetailsCard = ({topics}) => {
  
//   const { img, details, time, title, _id } = topics;
  

//   return (
//       <div>
//           <div className="card card-compact  bg-base-100 shadow-xl">
//   <figure><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
//   <div className="card-body ">
//           <h2 className="card-title text-[#373737] font-bold">{title}</h2>
          
//           <h2 className='w-[150px] flex items-center'><FaCalendarAlt></FaCalendarAlt> <span className='px-4'>{time}</span> </h2>

//           <p className='h-[100px]'>{ details}</p>
//           <div className="card-actions justify-center">
            

//           <button className="btn w-[100%] sm:w-[50%] bg-[#dc3545] my-4">  <Link className='' to={`/checkoutRout/${topics._id}`}>Get Premium Access </Link> </button>

//     </div>
//   </div>
// </div>

          
//     </div>
//   )
// }

// export default DetailsCard