import React from 'react'

import { FaMinus } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';

const Home = () => {
  const categories= useLoaderData()
  // console.log(categories);
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
          <h1 className='text-[#ff594e]  font-semi-bold text-2xl '>WELCOME TO EDUCATION
          </h1>
          <h1 className='text-[#302e2c] font-bold text-3xl'>
          OUR COURSE CATEGORIES
          </h1>
          <p className='text-center my-4 font-semi-bold '>There are six categories that we provide . You can totally A to Z learnign from here this six categories. <br />
          Click the below card and see detals courses </p>

        </div>
        <div className=" px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            
            categories.map(category => <Card key={category.id} category={category}></Card>)
        }
        </div>
      </div>
    </div>

    
    
  )
}

export default Home