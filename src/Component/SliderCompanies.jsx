import React, { useState } from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../Images/Company';
import Carousel from 'react-elastic-carousel'

// import 'swiper/css';

const companies = {
  one: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one
  },
  two: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  three: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  four: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
  five: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one

  },
  six: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  seven: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  eight: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
  nine: {
    name: 'Winbrains.com',
    location: 'Quadra, Victoria Canada',
    image: IMAGES.one

  },
  ten: {
    name: 'Infinizia.com',
    location: 'North Strees, California',
    image: IMAGES.two
  },
  eleven: {
    name: 'Bizotic.com',
    location: 'Barming Road, UK',
    image: IMAGES.three
  },
  twelve: {
    name: 'Glovibo.com',
    location: 'Washington, New York',
    image: IMAGES.four
  },
}

const SliderContainer = styled.div`
display: flex;
justify-content: center;
    width: 1340px;
    align-items: center;
`

const Svg = styled.img``

const SliderCompanies = () => {

  // const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  // const [itemQuantity, setItemQuantity] = useState(4)

  // changeDeviceSize(window.innerWidth);
  // const changeBackGroundColorForMobile = () => {
  //   if (deviceSize <= 990) {
  //     setItemQuantity(2)
  //   }
  // }
  //   const [isDesktop, setDesktop] = useState();


  // const updateMedia = () => {
  //     if
  //     setDesktop(window.innerWidth > 990);
  //   };
  
  //   useEffect(() => {
  //     window.addEventListener("resize", updateMedia);
  //     return () => window.removeEventListener("resize", updateMedia);
  //   });
  return (

    <div className='companies-slidercompanies'>

      <h1>Popular Companies</h1>


      <SliderContainer>
        <div className='slider-slidercompanies'>
          <Carousel itemsToShow={window.innerWidth <=990 ?2:4} enableAutoPlay autoPlaySpeed={3000}>
            {
              Object.values(companies).map(company => (
                <div className='item-slidercompanies'>
                  <img className='img-slidercompanies' src={company.image} />
                  <div className='name-slidercompanies'>{company.name}</div>
                  <div className='loc-slidercompanies'><i class="fa-solid fa-location-dot"></i> {company.location}</div>
                  <div className='hiringbtn'>Hiring</div>
                  </div>
              ))
            }
          </Carousel>
          </div>
      </SliderContainer>

      </div>
  )
}

export default SliderCompanies