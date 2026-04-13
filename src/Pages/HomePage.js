import React from 'react'
import { Hero } from '../Components/HeroSection'
import { Services } from '../Components/Services'
import { CompanyProfile } from '../Components/CompanyProfile'
import { WorkShowcase } from '../Components/WorkShowcase'
import { FeaturedServices } from '../Components/FeaturedServices'
import { Testimonials } from '../Components/Testimonials'
import { Team } from '../Components/Team'

const HomePage = () => {
  return (
    <div>
      <Hero />
    <Services />
    <CompanyProfile />
    <WorkShowcase />
    <FeaturedServices />
    <Testimonials />
    <Team />

    </div>
  )
}

export default HomePage