import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"

export default function HeroBanner() {
  return (
    <Carousel className='banner'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/5037397.jpg"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/5037389.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/5036638.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
