import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Navbar from '@/components/Navbar'
import React from 'react'

function index() {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default index