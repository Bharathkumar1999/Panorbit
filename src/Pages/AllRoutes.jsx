import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery'
import LandingPage from './LandingPage'
import NotFound from './NotFound';
import Posts from './Posts'
import Profile from './Profile'
import ToDo from './ToDo'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile/:userId" element={<Profile />}></Route>
        <Route path="/profile/posts" element={<Posts />}></Route>
        <Route path="/profile/gallery" element={<Gallery />}></Route>
        <Route path="/profile/todo" element={<ToDo />}></Route>
       
        <Route path="*" element={<NotFound />}></Route>
        
    </Routes>
  )
}

export default AllRoutes