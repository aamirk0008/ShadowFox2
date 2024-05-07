import React from 'react'
import FrontPage from './FrontPage'
import CarouselSlide from './CarouselSlide'
import PlayerStats from './PlayerStats'
import NewsUpdate from './NewsUpdate'
import Brands from './Brands'


const Home = () => {
  return (
    <>
    <CarouselSlide/>
    <FrontPage/>
    <PlayerStats/>
    <NewsUpdate/>
    <Brands/>
    </>
  )
}

export default Home