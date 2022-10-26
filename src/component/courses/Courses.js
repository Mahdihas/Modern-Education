import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';
import { Link, NavLink } from 'react-router-dom'

import RightSide from '../right-side/RightSide';

const Courses = () => {

    const categories= useLoaderData()
    console.log(categories);
  return (
      <div className='flex bg-white  py-6 pb-12 w-full flex-col-reverse sm:flex-row'>
          <div className="px-4 shadow-lg py-4  w-full sm:w-[78%] mr-[2%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
          {
            
            categories.map(category => <Card key={category.id} category={category}></Card>)
        }          </div>
          <div className="w-full text-center shadow-sm  sm:w-[20%]">
          <h1 className='text-[#302e2c] py-4 font-bold l'>
       COURSE CATEGORIES
              </h1>
              <div className="">
        
              
            
                  {
                      categories.map(category => <p className='py-3 text-green-700 font-bold' key={category.id}>
                          <Link to={`/topics/${category.id}`}>{category.name}</Link>
                      </p>)
                  }
                  
           </div>
          </div>
          

    </div>
  )
}

export default Courses