import Users from '../Users';
import UserCard from '../components/UserCard';


function Request() {
  return (
    <div className=''>
      <div className="  mt-3.5 w-[400px] h-[300px] mx-auto  " >
        <h1 className="font-bold text-4xl ">Follow your requests here</h1>
        <p className="text-sm mt-2.5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis mollitia vel.</p>

        {
             Users.map(user => <UserCard name={user.name} image={user.image} username={user.username} profession={user.profession} requestSent={user.requestSent}/>)
           }
      </div>
    </div>
  )
}

export default Request