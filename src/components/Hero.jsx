import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    // Set initial video source when the component mounts
    handleVideoSrcSet();

    // Add resize event listener
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      // Remove resize event listener on cleanup
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    if (videoSrc) {
      gsap.to("#hero", {
        opacity: 1,
        delay: 1.5
      });
      gsap.to("#cta", {
        opacity: 1,
        y: -50,
        delay: 1.5
      });
    }
  }, [videoSrc]);

  if (!videoSrc) {
    return null; // Return null or a loader while the videoSrc is being set
  }

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title opacity-0'>
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
