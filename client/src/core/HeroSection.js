import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: 'https://github.com/Aniket-ap/GreenFarm-MERN/blob/master/client/src/images/bgn1.gif?raw=true',
    altText: 'Slide 1',
    caption: '#greenfarm',
    header: 'Fresh and only the Finest produce on your tables',
    key: '1'
  },
  {
    src: 'https://github.com/Aniket-ap/GreenFarm-MERN/blob/master/client/src/images/bgn2.gif?raw=true',
    altText: 'Slide 2',
    caption: '#greenfarm',
    header: 'Fresh and only the Finest produce on your tables',
    key: '2'
  }
];

const HeroSection = () => <UncontrolledCarousel items={items} />;

export default HeroSection;



// Fresh and only the Finest produce on your tables