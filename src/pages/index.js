import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
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
    </main>
  )
}

export default index