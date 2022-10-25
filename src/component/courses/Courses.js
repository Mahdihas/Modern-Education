import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from '../card/Card';
import { Link, NavLink } from 'react-router-dom'

import RightSide from '../right-side/RightSide';

const Courses = () => {

    const categories= useLoaderData()
    console.log(categories);
  return (
      <div className='flex w-full flex-col-reverse sm:flex-row'>
          <div className="px-4 w-full sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
          {
            
            categories.map(category => <Card key={category.id} category={category}></Card>)
        }          </div>
          <div className="w-full sm:w-[20%]">
          <h1 className='text-[#302e2c] font-bold l'>
       COURSE CATEGORIES
              </h1>
              <div className="">
        
              
            
                  {
                      categories.map(category => <p key={category.id}>
                          <Link to={`/topics/${category.id}`}>{category.name}</Link>
                      </p>)
                  }
                  
           </div>
          </div>
          

    </div>
  )
}

export default Courses