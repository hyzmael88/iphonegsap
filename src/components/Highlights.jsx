import { rightImg, watchImg } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'	
import Image from 'next/image'
import React from 'react'
import VideoCarousel from './VideoCarousel'

function Highlights() {

  useGSAP(() =>{
    	gsap.to('#title', {opacity:1, y:0})
      gsap.to('.link', {opacity:1, y:0, duration:1, stagger:0.5})
  },[])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>
              Get the highlights.
          </h1>
          <div className='flex flex-wrap items-center gap-5 '>
            <p className='link'>
              Wath the film
            <Image src={watchImg} alt='Watch' width={20} height={20} className="ml-2" />
            </p>
            <p className='link'>
              Wath the event
            <Image src={rightImg} alt='Watch' width={8} height={8} className="ml-2" />
            </p>

          </div>
        </div>
        <VideoCarousel/>
      </div>

    </section>
  )
}

export default Highlights