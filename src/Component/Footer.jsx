import React from 'react'
import './Jobarea.css'
import b from '../Images/footer-bg.png'
import l from '../Images/logo.png';
const Footer = () => {
    return (
        <div className='footer' style={{ backgroundImage: `url(${b})` }}>
            <div className='footer-content'>
                <div className='footer-desc'>
                    <img src={l} alt="img" />
                    <p style={{ fontSize: "15px", margin: "20px 0px", paddingRight: "15px",fontWeight:'600' }}> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className='ul-icon'>
                        <li className='footer-hover'><i class="fa-brands fa-youtube"></i></li>
                        <li className='footer-hover'><i class="fa-brands fa-facebook-f"></i></li>
                        <li className='footer-hover'><i class="fa-brands fa-instagram"></i></li>
                        <li className='footer-hover'><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
                <div className='category-footer'>
                    <h3 className='h-class'>Category</h3>
                    <div className='hrline-parent'>
                        <div className='thicline'>

                        </div>
                        <div className='line'>

                        </div>
                    </div>
                    <ul className='ul-footer'>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i> Development</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Business</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Tech & IT</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Finance</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Networking</li>
                    </ul>
                </div>
                <div className='category-footer'>
                    <h3 className='h-class' >Quick Links</h3>
                    <div className='hrline-parent'>
                        <div className='thicline'>

                        </div>
                        <div className='line'>

                        </div>
                    </div>
                    <ul className='ul-footer'>
                        <li className='li-footer'> <i class="fa-solid fa-angle-right"></i>Home</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>About Us</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Blogs</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Companies</li>
                        <li className='li-footer'><i class="fa-solid fa-angle-right"></i>Testimonials</li>
                    </ul>
                </div>
                <div className='category-footer'>
                    <h3 className='h-class'>Find Us</h3>
                    <div className='hrline-parent'>
                        <div className='thicline'>

                        </div>
                        <div className='line' />

                    </div>
                    <ul className='ul-footer'>
                        <li className='li-footer'><i class="fa-solid fa-location-dot" style={{marginRight:10}}></i> 28/A Street,NewYork City</li>
                        <li className='li-footer'><i class="fa-solid fa-phone"style={{marginRight:10}}></i> +88 0123 456 789</li>
                        <li className='li-footer'><i class="fa-solid fa-at"style={{marginRight:10}}></i> hello@gable.com</li>
                    </ul>
                </div>
            </div>
            <div className='copyrightarea-footer'>
                <div className='line' />
                <div className='copyrightarea-footercontent'>
                    <p style={{ paddingRight: 675,fontWeight:600 }}>Copyright © 2022 Gable. Designed By <span className='footer-hover'>HiBootstrap</span></p>
                    <a  className='footer-hover' >Terms & Conditions</a>
                    <span style={{ margin: '0px 5px' }}> -
                    </span>
                    <a className='footer-hover' >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer