import React from 'react'
import Request from '../Pages/Request'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
  <div className="border-b border-neutral-300 mt-1.5 mx-auto py-3.5 px-5"   >
     <div className='flex justify-between items-center w-[1000px] font-bold m-auto mb-2 ' >
      <Link  className='text-2xl font-bold'>Instagram</Link>
      <div className="flex gap-4 items-center font-bold  ">
          <Link to='./' >User</Link>
          <Link to='/Request'>Request</Link>
          <Link to='/About'>About us</Link>
          <Link to='../Pages/Error'>Random link</Link>   
      </div>
   </div>
  </div>
  )
}

export default Navbar