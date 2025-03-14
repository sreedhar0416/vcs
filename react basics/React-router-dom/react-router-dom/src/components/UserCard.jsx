import React from 'react'
import {Link} from 'react-router-dom';

function UserCard({image, username, name, profession}) {
  return ( 
        <Link to = {`/${username}`} className="hover:cursor:pointer ">
            <div className="flex gap-4 mt-5 items-center ">
                <img src={image}  className='w-[60px] h-[60px] rounded-full  object-cover'  alt="" />
                <div className="">
                    <p className=" font-bold ">{name}</p>
                    <p className="text-neutral-500 text-sm">{profession}</p>
                </div>
            </div>
        
        
        </Link>
  )
}

export default UserCard