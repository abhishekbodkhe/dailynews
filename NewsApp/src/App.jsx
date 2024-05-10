import React from 'react'
import Home from './components/Home'
import Layout from './Layout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom" 
import Entertainment from './components/Entertainment'
import Technology from './components/Technology'
import Sports from './components/Sports'
import Health from './components/Health'
import Science from './components/Science'
import Business from './components/Business'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home /> } />
        <Route path='Entertainment' element ={<Entertainment />} />
        <Route path='Sports' element ={<Sports />} />
        <Route path='Technology' element ={<Technology />} />
        <Route path='Business' element ={<Business />} />
        <Route path='Health' element ={<Health />} />
        <Route path='Science' element ={<Science />} />
        
      </Route>
    )
  )

  
  return (
    // <>
    //   <Header />
    //   <Home />
    //   <News />
    //   <Testimonials />
    //   <Footer />
    // </>
    <>

    < RouterProvider router={router} />


    </>
  )
}

export default App
