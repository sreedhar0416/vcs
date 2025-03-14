import React from 'react'
import { useState } from 'react'


const users = [
    {
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&w=150&h=150",
      profession: "Software Engineer",
      requestSent: false,
      isFriend: true
    },
    {
      name: "Michael Smith",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=150&h=150",
      profession: "Graphic Designer",
      requestSent: true,
      isFriend: false
    },
    {
      name: "Sophia Brown",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=150&h=150",
      profession: "Marketing Manager",
      requestSent: false,
      isFriend: false
    },
    {
      name: "Daniel Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=150&h=150",
      profession: "Data Analyst",
      requestSent: true,
      isFriend: true
    },
    {
      name: "Emma Davis",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&fit=crop&w=150&h=150",
      profession: "UX Designer",
      requestSent: false,
      isFriend: true
    }
  ];
  console.log(users)


function User({name,image,profession}) {

  let [user, setUser] = useState(false);

    function requestHandler() {
        setUser((prev)=> ({
            ...prev,
            requestSent : !prev.requestSent
        }))    
    }
    
          return (
            <div className='w-[400px] h-[100px] bg-neutral-300 mt-8 mx-auto flex justify-between items-center p-5 rounded-xl'>
            <div className='flex items-center  gap-3'>
                <img className='h-16 w-16 rounded-full ' src={image} alt="" />
          
                <div className="">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">{profession}</p>
                </div>
            </div>
            <div className=" mr-2.5">
                <button className="hover:text-blue-500 "onClick={requestHandler}>
                    <div>
                        {user.requestSent ? "request sent": "Send Request"}
                    </div>
                </button>
            </div>
        
        </div>
          )  
    }
  
  


export default User