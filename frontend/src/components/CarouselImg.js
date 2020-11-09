import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/key1.jpg'
import image2 from '../images/key2.jpg'
import image3 from '../images/key3.jpg'

const CarouselImg = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={450}
            src={image3}
            alt='KeyBoards'
          />
          <Carousel.Caption>
            <h3>Custom Keyboards</h3>
            <p>Ranging from 60% to full size</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={450}
            src={image2}
            alt='KeyBoard'
          />

          <Carousel.Caption>
            <h3>Limited Stock</h3>
            <p>On most popular 60% Mechanical Keyboards</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={450}
            src={image1}
            alt='KeyBoard'
          />

          <Carousel.Caption>
            <h3>Different switches available</h3>
            <p>Keybords avaiable by switch.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselImg
