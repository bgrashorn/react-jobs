import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
// JavaScript code can go here to return element in component
  return (
    // has to be wrapped in a single element
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />

    </>
    
  )
}

export default App


