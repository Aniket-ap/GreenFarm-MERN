import React from 'react';

import B1 from '../images/bananac.jpg'
import B2 from '../images/applec.jpg'
import B3 from '../images/promganate.jpg'


const HeroSection = () => {
  return(
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={B1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={B2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={B3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default HeroSection;



// Fresh and only the Finest produce on your tables