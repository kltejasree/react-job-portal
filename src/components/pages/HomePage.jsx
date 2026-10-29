import React from 'react'

import Hero from '../Hero'
import HomeCards from '../HomeCards'
import ViewAllJobs from '../ViewAllJobs'
import BrowseJobs from '../BrowseJobs';


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <BrowseJobs isHome = {true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage