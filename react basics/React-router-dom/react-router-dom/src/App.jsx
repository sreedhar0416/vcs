import React from 'react'
// import User from './components/User'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Request from "./Pages/Request"
import About from './Pages/About'
import Error from './Pages/Error'
import UserDetails from './Pages/UserDetails'
import Post from './Pages/Post'



function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path="/Request" element={<Request />}/>,
        <Route path="/About" element={<About />}/>,
        <Route path="/:username" element={<UserDetails />}/>,
        <Route path="/post/:id" element={<Post />} />,
        <Route path="*" element={<Error />}/>,
      </Routes>
     
    </>
  )
}

export default App