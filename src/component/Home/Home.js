import React from 'react'

import { FaMinus } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";

const Home = () => {
  const categories = useLoaderData()
  
  console.log(categories);
  return (
    <div className="">
      <div className="hero sm:h-[90vh]" style={{ backgroundImage: `url(" https://www.ecologytheme.com/theme/eduwise/images/features/features_1.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Modern Education</h1>
        <p className="mb-5">Modern Education is the latest and contemporary version of education that is taught in schools and learning institutions in the 21st century. Modern education doesn’t just only focus on prominent academic disciplines of Commerce, Science and Arts but also aims to foster critical thinking, life skills, value education,</p>
        <button className="btn  bg-[#dc3545]">View Courses</button>
      </div>
    </div>
      </div>
      

      <div className="py-4">
        <div className="text-center py-4 ">
          <h1 className='text-center text-[#dc3545]'>        <FaMinus className='text-center  text-2xl  mx-auto'></FaMinus>
          </h1>
          <h1 className='text-[#ff594e]  font-semi-bold text-2xl py-4 sm:text-4xl '>WELCOME TO EDUCATION
          </h1>
          <h1 className='text-[#302e2c] font-bold text-3xl py-2 sm:text-5xl'>
          OUR COURSE CATEGORIES
          </h1>
          <p className='text-center my-4 font-semi-bold '>There are six categories that we provide . You can totally A to Z learnign from here this six categories. <br />
          Click the below card and see detals courses </p>

        </div>
        <div className="   px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            
            categories.map(category => <Card key={category.category_id} category={category}></Card>)
        }
        </div>

        

        <h1 className='text-center py-6 text-[#dc3545]'>        <FaMinus className='text-center  text-2xl  mx-auto'></FaMinus></h1>

        <div className="py-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <div className=''>
          <div className="card min:h-[500px] ">
  <div className="card-body">
    <h2 className="card-title text-5xl">Take The First Step To Learn With Us.</h2>
    <p className='py-6 font-normal font-serif'>Automobiles, computers, and cities: what’s the one thing these share in common? Coding! Every technology on which you rely in your everyday life is powered by coding language. Cars operate on it, computers can’t function without it, and some cities and towns use it to strengthen their infrastructure. Hence, it is a perfect time to learn coding for beginners. </p>
   
  </div>
</div>

          </div>



          <div className="">
          <div className="card min:h-[500px]  bg-base-100 shadow-xl">
  <figure><img className='h-[400px] w-[100%]' src="https://www.ecologytheme.com/theme/eduwise/images/banner/learnstep.jpg" alt="Shoes" /></figure>
 
</div>


          </div>


          
        </div>

        <div className="py-12">
        <h1 className='text-[#dc3545] text-center font-semibold font-serif text-2xl py-2 sm:text-3xl'>
            Why  Choose Us?
          </h1>
          <h1 className='text-center  text-[#dc3545]'>        <FaMinus className='text-center  text-2xl  mx-auto'></FaMinus></h1>

          <p className='text-center py-6 font-normal text-1xl font-serif'>There has lot of reason why you choose us we take care our student . we have an extraStudent care team Students care team.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 mt-6">

<div className="card  bg-base-100 shadow-xl pb-0">
<figure><img className='w-full' src="https://htmldemo.net/eduhas/eduhas/assets/images/courses/courses-08.jpg" alt="Shoes" /></figure>
<div className="card-body pb-0 px-0">
<h2 className="card-title px-6">Superfast Support</h2>
<p className='px-6 pb-6'>   Almost all questions regarding our study methods are answered in detail in the PRO videos, and it’s in your best interest to watch the PRO videos all the way through anyways, so PLEASE DO THAT FIRST. To submit a request, click on the purple “Submit Request” button below and fill out the form with your question or request, and then submit it.</p>
                <div className="card-actions bg-[#eaeff2] flex justify-between items-center px-4 py-6">
                
                  <p className='flex justify-center items-center'>                  <FaUsersCog className='text-1xl mx-2'></FaUsersCog> <span className='mx-2'>59</span> <FaHeart className='text-red-600 mx-2'></FaHeart> <span className='mx-2'>19</span>
</p> <p className='flex justify-center items-center'> <FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>
</div>
</div>
            </div>
            




            <div className="card  bg-base-100 shadow-xl">
<figure><img className='w-full' src="https://htmldemo.net/eduhas/eduhas/assets/images/courses/courses-07.jpg" alt="Shoes" /></figure>
<div className="card-body pb-0 px-0">
<h2 className="card-title px-6">Certification</h2>
<p className='px-6 pb-6'>Professional Certificates on Coursera help you get job-ready for an in-demand career field in less than a year. Earn a career credential, apply your knowledge to hands-on projects that showcase your skills for employers, and get access to job search resources. Many programs also provide a pathway to an industry-recognized certification.? </p>
<div className="card-actions bg-[#eaeff2] flex justify-between items-center px-4 py-6">
                
                <p className='flex justify-center items-center'>                  <FaUsersCog className='text-1xl mx-2'></FaUsersCog> <span className='mx-2'>59</span> <FaHeart className='text-red-600 mx-2'></FaHeart> <span className='mx-2'>19</span>
</p> <p className='flex justify-center items-center'> <FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>
</div>
</div>
</div>





  



  <div className="card  bg-base-100 shadow-xl">
<figure><img className='w-full' src="https://htmldemo.net/eduhas/eduhas/assets/images/courses/courses-05.jpg" alt="Shoes" /></figure>
<div className="card-body pb-0 px-0">
<h2 className="card-title px-6">Apply Online</h2>
<p className='px-6 pb-6'>The application and registration process for online classes is the SAME as that for "in-person" classes. First, you must apply for admission if you have not already done so, </p>
<div className="card-actions bg-[#eaeff2] flex justify-between items-center px-4 py-6">
                
                <p className='flex justify-center items-center'>                  <FaUsersCog className='text-1xl mx-2'></FaUsersCog> <span className='mx-2'>59</span> <FaHeart className='text-red-600 mx-2'></FaHeart> <span className='mx-2'>19</span>
</p> <p className='flex justify-center items-center'> <FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>
</div>
</div>
</div>

</div>
       </div>
      </div>
    </div>

    
    
  )
}

export default Home