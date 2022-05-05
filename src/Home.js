import React from 'react'
import ImgSlider from './ImgSlider'
import "./Home.css"
import Intro from './Intro'
import Krishna from './Krishna'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className='HomeContainer'>
        <ImgSlider />
        <Intro/>
        <Krishna />
    </div>
    </>
  )
}

export default Home