import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import HowItWorks from '@/components/HowItWorks'
import Model from '@/components/Model'
import Navbar from '@/components/Navbar'
import React from 'react'

function index() {
  return (
    <main id='root' className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default index