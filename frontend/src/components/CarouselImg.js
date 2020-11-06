import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselImg = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://mechanicalkeyboards.com/shop/images/products/large_5027_large_DKON1861ST-USPDWWT1_main.png'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://mechanicalkeyboards.com/shop/images/products/large_KB181-White_main.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://mechanicalkeyboards.com/shop/images/products/large_DMFE20O-OAAPA81_main.jpg'
            alt='Third slide'
          />

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

export default CarouselImg
