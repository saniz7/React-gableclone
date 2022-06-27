import React from 'react'
import './Jobarea.css'
import b from '../Images/app-bg.png'
import f from '../Images/One.png'
import s from '../Images/Onee.png'
// import Carousel from './Carousel'
import IMAGES from '../Images/Blog'
let arr = [{ img: IMAGES.one, desc: 'The next generation IT will change the world', dp: IMAGES.four, name: 'Aikin Ward', rm: 'Read More' },
{ img: IMAGES.three, desc: 'It is the most important sector in the world', dp: IMAGES.four, name: 'Aikin Ward', rm: 'Read More' },
{ img: IMAGES.two, desc: 'Nowadays IT is being most popular', dp: IMAGES.four, name: 'Aikin Ward', rm: 'Read More' }]
const Bottom = () => {
   return (
      <div>
         <div className='download' style={{ backgroundImage: `url(${b})` }}>
            <div className='img-bottom'>
               <img src={f} alt="img" className='img-app' />
               <img src={s} alt="img" className='img-appsecond' />
            </div>
            <div className='content-bottom'>
               <h2 className='h-class'>Download The Glabe Mobile App</h2>
               <p >Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
               <div style={{ display: 'flex' }}>
                  <button className='btn-bottom'>
                     <i class="fa-brands fa-apple" style={{ fontSize: "40px" }}></i>

                     <div className='btn-content'>
                        <p style={{ fontSize: "10px", margin: "0px", padding: "0px" }}> Download on the</p>
                        <h6 style={{ margin: "0px", padding: "0px" }}>App Store</h6>
                     </div>
                  </button>
                  <button className='btn-bottom'>
                     <i class="fa-brands fa-google-play" style={{ fontSize: "35px" }}></i>

                     <div className='btn-content'>
                        <p style={{ fontSize: "10px", margin: "0px", padding: "0px" }}>ANDROID APP ON</p>
                        <h6 style={{ margin: "0px", padding: "0px" }}>Google Play</h6>
                     </div>
                  </button>
               </div>
            </div>
         </div>
         <div className='blogs'>
            <h2 className='h-class'>Our Latest Blogs</h2>
            <div className='card-container'>
               {arr.map((i) => (
                  <div className='card-blogg'>
                     <img src={i.img} alt="img" width={420} height={328} />
                     <h3  style={{padding:'20px 0px'}}>
                        <a className='h2-class' href="" style={{ textDecoration: 'none' }}>{i.desc}</a>
                     </h3>
                     <ul className='blog-dp'>
                        <li>
                           <img src={i.dp} className='idp' alt="img" />
                           {i.name}
                           <a className='rm-hover' href="">{i.rm} <i class="fa-solid fa-angle-right"></i></a>
                        </li>
                     </ul>
                  </div>
               ))}
            </div>
         </div>
         <div className='Newsletter'>
            <h2 className='h-class'>Subscribe Newsletter</h2>
            <div className='input'>
               <input type="email" placeholder='Enter Your Email' />
               <button className='btn-News'>Subscribe</button>
            </div>
         </div>
      </div>
      //  <Carousel/>
   )
}

export default Bottom