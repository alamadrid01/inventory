import React from 'react'
import Collaboration from './Collaboration'
import HeroSection from './HeroSection'
import Startup from './Startup'
import Testimonies from './Testimonies'
import Work from './Work'
import "./styles/Home.scss"

function Home() {
  return (
    <div className='home'>
        <HeroSection />
        <Work />
        <Startup />
        <Collaboration />
        <Testimonies />
    </div>
  )
}

export default Home