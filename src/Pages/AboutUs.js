import React from 'react'
import { HeroSection } from '../Components/AboutUs/AboutUsHeroSection'
import { StatCard } from '../Components/AboutUs/StatCard'
import { WhoWeAreSection } from '../Components/AboutUs/WhoWeAre'
import { ValuesSection } from '../Components/AboutUs/ValueSection'
import { CompanyStatusSection } from '../Components/AboutUs/CompanyStatusSection'
import { TimelineSection } from '../Components/AboutUs/TimelineSection'

const AboutUs = () => {
  return (
    <div>
        <HeroSection />
        <WhoWeAreSection />
        <ValuesSection />
        <CompanyStatusSection />
        <TimelineSection />

    </div>
  )
}

export default AboutUs