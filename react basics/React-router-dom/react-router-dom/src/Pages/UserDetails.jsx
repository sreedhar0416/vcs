import React from 'react'
import { useParams } from 'react-router-dom';
import users from '../Users';
import Feed from '../components/Feed'

function UserDetails() {

  let { username } = useParams();
  let user = users.find(users => users.username == username);

  return (
    <>
        <div className=" mx-auto mt-24 mb-24 flex gap-7 items-center w-[600px]">
            <img src={user.image} className=' rounded-full w-40 h-40 object-cover ' alt="" />
            <div className=" ">
                <h2 className="font-bold text-2xl">{user.name}</h2>
                <p className="text-md">{user.profession}</p>
                <p className=" text-md ">{user.description}</p>
                <div className=" flex gap-3 mt-3.5  ">
                    <p className="  bg-neutral-300 px-3 py-1 rounded-md">{user.followers} Followers</p>
                    <p className=" bg-neutral-300 px-3 py-1 rounded-md">{user.following} Following</p>
                </div>
            </div>
           
        </div>
        <div className="w-[800px]  mx-auto ">
            <div className="flex gap-2 flex-wrap ">
                {
                    user.posts.map(post => < Feed img={post.image} id={post.id} />)
                }
            </div>
        </div>
    
    </>
  )
}

export default UserDetails;