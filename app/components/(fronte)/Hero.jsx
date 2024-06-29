'use client'
import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { Button } from 'flowbite-react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [fadeProps, fadeApi] = useSpring(() => ({
    opacity: 0,
    
    transform: 'translateX(-50px)'
  }));
  

  const [stripeProps, stripeApi] = useSpring(() => ({
    width: '0%',
    config: { duration: 2000 }
  }));
  const [imageProps, imageApi] = useSpring(() => ({
  
    transform: 'translateY(-50px)',
   opacity:0
  }));
  const [ buttonProps,  buttonApi] = useSpring(() => ({
  
    transform: 'translateY(100px)',
   opacity:0
  }));

  useEffect(() => {
    const runAnimations = () => {
    fadeApi.start({
      opacity: 1,
      transform: 'translateX(10px)',
      config: { duration: 1000 }
    });
    stripeApi.start({
      width: '100%'
    });
    imageApi.start({
      opacity: 1,
    transform: 'translateY(0)',
      config: { duration: 2000 }
      
    });
    buttonApi.start({
      opacity: 1,
    transform: 'translateY(10px)',
      config: { duration: 1000 }
      
    });
   
       // Reset the animations after 3 seconds to start the loop
       setTimeout(() => {
        fadeApi.start({
          opacity: 0,
          transform: 'translateX(-50px)',
          config: { duration: 0 },
        
        });
        stripeApi.start({
          width: '0%',
        });
        imageApi.start({
          opacity: 0,
          transform: 'translateY(-50px)',
    config: { duration: 1000 }
          });
          buttonApi.start({
            opacity: 0,
            transform: 'translateY(100px)',
           
          });
      }, 13000);
    };

    runAnimations();
    const interval = setInterval(runAnimations, 15000); 

    return () => clearInterval(interval);
  }, [fadeApi, stripeApi,imageApi,buttonApi]);

  return (
    <div className='px-3 w-full hidden z-10 lg:flex'>
    <animated.div  style={imageProps} className=' z-[5] h-[30rem] w-[30rem] -mt-4  ml-24 absolute '>
    <Image src={'/hero-image.png'} fill alt='heroimage' className=' object-contain w-full h-full '/>

    </animated.div>
    <div className=" mt-20 flex flex-col w-full "> 
    
      <animated.div style={fadeProps} className="flex justify-center w-full whitespace-nowrap z-10 items-center ">
        <h1 className='text-6xl text-slate-800 dark:text-slate-50 open-sans font-extrabold '>30% DISCOUNT</h1>
        
      </animated.div>
      <animated.div className={'bg-red-600 dark:bg-red-800 h-16 p-3 flex justify-center items-center'} style={{ ...stripeProps, left: '0' }}>
       <h1 className='text-6xl  text-slate-50 dark:text-slate-900 jersey-25-regular z-20 ml-10  font-extrabold '>WELCOME20</h1>
     </animated.div>

     <animated.div className={' flex justify-center items-center ml-16'} style={{ ...buttonProps }} >
     <Button type="button" outline className="  lato-bold "  gradientDuoTone="pinkToOrange">
          
        SHOP NOW </Button>
     </animated.div>
     
    </div>
    </div>
  );
};

export default Hero;
