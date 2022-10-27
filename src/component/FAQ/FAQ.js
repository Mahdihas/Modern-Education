import React from 'react'

const FAQ = () => {
  return (
    <div className=' py-12 mb-[100px]'>
      <h1 className='text-4xl text-center font-bold text-slate-500'>Frequently Asked Questions
</h1>
<p className='text-center text-1xl my-2 font-bold'>
Here are answers to most common questions. Can't find an answer? Call us!</p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
<div className="collapse h-[300px] shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title text-purple-400 font-serif font-bold">
   1. User Account <br />
Manage payment settings and invoices
  </div>
  <div className="collapse-content "> 
    <p className='text-center text-1xl my-2 font-serif'>First you have to register our website and you have to buy our premium coursaes after that you can acces our courses . You can use to payment any bank account or sub-accoutn</p>
  </div>
      </div>
      
        
<div className="collapse shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title text-purple-400 font-serif font-bold">
   2. Our schedule ?
  </div>
  <div className="collapse-content "> 
    <p className='text-center text-1xl my-2 font-serif'>16 hour in a day our team members guide you if you want any help they response you. but there </p>
  </div>
      </div>
      
        
<div className="collapse shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title text-purple-400 font-serif font-bold">
   3. Whate instruement need for our Course?
  </div>
  <div className="collapse-content "> 
    <p>Any category of people can do our courses if he or she  has a  computer or laptop or mobile phone and also need to attitude for hardwork </p>
  </div>
      </div>
      
</div>

    </div>
  )
}

export default FAQ