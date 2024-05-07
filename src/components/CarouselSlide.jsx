import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import rcb4 from "../assets/rcb4.jpg";
import rcb2 from "../assets/rcb2.jpg";


const CarouselSlide = () => {
  return (
    <div className='w-full h-full'>
        <Carousel fade>"
      <Carousel.Item>
        <img className='w-[60%] mx-auto' src={rcb4} alt="" />
        <Carousel.Caption className='absolute top-4 left-16 flex flex-col justify-start items-center hover:bg-slate-800 w-[55%] h-52 transition duration-500'>
          <h3 className='text-8xl font-bold font-body '>Kohli's top knock</h3>
          <p className='w-[60%]'>The RCB star got to his fifty in just 31 balls. Kohli has now become the only Indian batter with a century of fifty-plus scores in T20 cricket. This was Kohli's 100th score of fifty or more in the shortest format</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-[60%] mx-auto' src='https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_1003.jpg' alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-[60%] mx-auto' src='https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_0551.jpg' alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-[60%] mx-auto' src='https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_1023.jpg' alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-[60%] mx-auto' src='https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_1404.jpg' alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselSlide