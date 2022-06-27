import React, { userRef, useState } from 'react'
import './Jobarea.css'
import z from '../Images/z.jpg'
import x from '../Images/x.jpg'
import SliderCompanies from './SliderCompanies';
import IMAGES from '../Images/Blog';


let arr = [{ num: '14 K+', p: 'Job Available' },
{ num: '18 K+', p: 'Submitted CV' },
{ num: '9 K+', p: 'Company' },
{ num: '22 K+', p: 'Registered Member' },
{ num: '55 K+', p: 'Appointed to Job' }]

let a = [{ icon: <i class="fa-solid fa-circle-check"></i>, desc: 'Trusted & Quality Job' },
{ icon: <i class="fa-solid fa-city"></i>, desc: 'Top Companies' },
{ icon: <i class="fa-solid fa-square-xmark"></i>, desc: 'No Extra Charge' },
{ icon: <i class="fa-solid fa-users"></i>, desc: 'International Job' }]

const Jobportal = () => {
    return (
        <div>
            <div className='container-jobportal'>
                <div className='img-jobportal'>
                    <img src={z} alt="img" />
                    <div className='imgright'>
                    <img src={x} alt="img" width={245} height={311} style={{ marginLeft: 30 }} />
                    <span className='span-jobportal'>100% Trusted</span>
                    </div>
                </div>
                <div className='content-jobportal'>
                    <h2 className='h-class' style={{margin:'50px 50px 50px 100px' }}>Trusted & Popular Job Portal</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corrupti recusandae accusamus exercitationem ea ducimus voluptates unde
                        delectus enim ex sit vel, facilis tempore ad, architecto odit, aliquam a quidem.</p>

                    <div className='card-jobportal'>
                        {
                            arr.map((i) => (
                                <div className='cardcontent-jobportal'>

                                    <h2  style={{color:'#1b7d26',fontSize:'28',fontWeight:600}}>{i.num}</h2>
                                    <p>{i.p}</p>

                                </div>
                            ))}
                    </div>

                </div>
            </div>
            <div>
               <SliderCompanies/>
            </div>

            <div className='container-jobportal'>
                <div className='img-jobportal'>
                    <div className='imgleft'>
                        <img src={IMAGES.five} alt="img" width={950} height={514} />
                    </div>
                    <div className='imgright'>
                        <img src={IMAGES.six} alt="img" width={252} height={281} style={{ marginLeft: 30,marginBottom:20 }} />
                        <img src={IMAGES.seven} alt="img" width={252} height={213} style={{ marginLeft: 30 }} />
                    </div>
                </div>
                <div className='content-jobportal'>
                    <h2 className='h-class' style={{margin:'50px 50px 50px 150px' }}>Why We are Most Popular</h2>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                        lacus vel facilisis. Quis ipsum suspendisse ultrices gravida</p>

                    <div className='card-jobportal2'>
                        {
                            a.map((i) => (
                                <div className='cardicon-jobportal'>

                    <div className='cardicon-imgcard'>
                    <div className='cardicon-imgcat'>
                        {i.icon}
                    </div>
                    </div>
                                    <p className='cardicon-p'>{i.desc}</p>

                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Jobportal