import React from 'react'
import { Link } from 'react-router-dom'

function Feed({img,id}) {
  return (
    <div>
        <Link to={`/post/${id}`}>
                <img src={img} className='w-[260px] h-[260px] flex-grow object-cover' alt="" />
        </Link>
    </div>
  )
}

export default Feed