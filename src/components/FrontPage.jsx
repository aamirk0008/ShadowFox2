import React from 'react'
import { useRef, useState } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Images
import rcb1 from "../assets/rcb3.jpg";
import rcb2 from "../assets/rcb4.jpg";
import rcb3 from "../assets/rcb6.jpg";
import rcb4 from "../assets/rcb9.jpg";
import rcb5 from "../assets/rcb22.jpg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './Front.css';

// import required modules
import { EffectCreative } from 'swiper/modules';

const FrontPage = () => {
  return (
    <div className="flex pt-16 text-white h-[90vh]">
        <div className='w-3/5 flex flex-col justify-center px-24 gap-8'>
          <h1 className='text-2xl font-bold font-body'>Welcome to the Ultimate Royal Challengers Bangalore Fan Zone! 🏏</h1>
          <p className='font-body font-semibold'>Dive into the vibrant world of cricket with Royal Challengers Bangalore (RCB) and join us in celebrating the passion, the spirit, and the electrifying energy that defines RCB fandom. As the heartbeat of Bengaluru, RCB unites millions of fans worldwide under one banner, fueled by the dream of victory and the thrill of the game.</p>
          <h3 className='text-2xl font-body font-extrabold'>Join Us to get exclusive merchandise swags..!!!</h3>
          <button className='bg-red-700 w-[30%] px-8 py-2 rounded-md font-body font-extrabold text-lg hover:bg-black transition duration-300 hover:translate-x-1'>Get Your Swag<FaAnglesRight className='inline ml-2'/></button>
        </div>
        <div>
          <h3 className='text-2xl font-body font-extrabold'>Here are some Play Bold Scenes....</h3>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={rcb1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={rcb2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={rcb3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcb4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcb5} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={rcb1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcb1} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    </div>
  )
}

export default FrontPage