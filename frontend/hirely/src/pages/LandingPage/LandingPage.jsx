import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'

const LandingPage = () => {
  return (
    <div className='min-h-screen mb-[100vh]'>
      <Header />
      <Hero />
      <Features />
    </div>
  )
}

export default LandingPage