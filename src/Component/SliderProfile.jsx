import React from 'react'
import styled from 'styled-components/macro'
import IMAGES from '../Images/Profile'
import './Jobarea.css'
import Carousel from 'react-elastic-carousel'

const companies = {
    one: {
        name: 'Jerry Hudson',
        position: 'Business Consultant',
        image: IMAGES.one
    },
    two: {
        name: 'Jac Jacson',
        position: 'Web Consultant',
        image: IMAGES.two
    },
    three: {
        name: 'Tom Potter',
        position: 'UI/UX Consultant',
        image: IMAGES.three
    },
    four: {
        name: 'Shane Marc',
        position: 'SEO Consultant',
        image: IMAGES.four
    },
    five: {
        name: 'Jerry Hudson',
        position: 'Business Consultant',
        image: IMAGES.five
    },
    six: {
        name: 'Jac Jacson',
        position: 'Web Consultant',
        image: IMAGES.six
    },
    seven: {
        name: 'Tom Potter',
        position: 'UI/UX Consultant',
        image: IMAGES.seven
    },
    eight: {
        name: 'Shane Marc',
        position: 'SEO Consultant',
        image: IMAGES.eight
    },
}


const Slider = styled.div``

const ImageDiv = styled.div``

const InfoContains = styled.div`

`


const SliderProfile = () => {
    
    return (
        <div className='Container-Sliderprofile'>
            <h1>Featured Profile</h1>
            <div className='box-Sliderprofile'>
                <Slider>
                    <Carousel itemsToShow={4} enableAutoPlay autoPlaySpeed={3000} >
                        {
                            Object.values(companies).map(company => (
                                <div className='item-Sliderprofile'>
                                    <InfoContains>
                                        <div className='info-Sliderprofile'>
                                            <h4 style={{margin:0,padding:0}}>{company.name}</h4>
                                            <p style={{margin:0,padding:0}}>{company.position}</p>
                                            <p className='p-sliderprofile'>
                                                <div className='viewprofile'>View Profile <i class="fa-solid fa-arrow-right"></i></div>
                                                <i class="fa-solid fa-heart"></i>
                                            </p>
                                            </div>
                                    </InfoContains>
                                    <ImageDiv>
                                        <img className='img-Sliderprofile' src={company.image} />
                                    </ImageDiv>
                                    </div>
                            ))
                        }
                    </Carousel>
                </Slider>
                </div>
            </div>
    )
}

export default SliderProfile