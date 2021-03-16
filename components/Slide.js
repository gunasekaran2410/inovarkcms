import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

function Slide(){
  return(
      <div>
       
<Carousel fade>
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="http://www.inovark.com/assets/images/slides/market%20share.jpg"
      alt="First slide"
    /> */}
    <Image src="/images/slides/market share.jpg" layout="responsive" width="1920" height="538"  />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="/images/slides/world.jpg" layout="responsive" width="1920" height="538"  />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

          
      </div>
  )
}

export default Slide
