import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import './Jobarea.css'
import IMAGES from '../Images/Logo';
import { AnimatePresence, motion } from "framer-motion"
const Jobbox = styled.div`
padding: 100px 0px;
`;
const Container = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
`;
const JobsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* width:150px; */
    justify-content: center;
    align-items: center; 
    /* width :100% ; */
    @media (max-width:1200px) {
        width: 960px;        
    }
    @media (max-width:990px) {
        width: 720px;
    }  
    @media (max-width:770px) {
        width: 516px;
    }
    @media (max-width:575px) {
        width: 100%;
    }
`
const Jobitem = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
gap:20px;
width:100%;
margin-top: 40px;

`;
let arr = [{ img: IMAGES.one, post: 'UI/UX Designer', url: 'Winbrans.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'new', 'featured'] },
{ img: IMAGES.two, post: 'Android Developer', url: 'Infinizia.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'new', 'featured'] },
{ img: IMAGES.three, post: 'Senior Manager', url: 'Glavibo.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'recent', 'partTime'] },
{ img: IMAGES.four, post: 'Product Designer', url: 'Bizotic.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'recent', 'fullTime'] },
{ img: IMAGES.five, post: 'Digital Marketer', url: 'Hotelzo.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'new', 'partTime'] },
{ img: IMAGES.six, post: 'Sales Manager', url: 'Gozuto.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'new', 'featured'] },
{ img: IMAGES.seven, post: 'Web Developer', url: 'Udiza.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'featured', 'fullTime'] },
{ img: IMAGES.eight, post: 'SEO', url: 'Oqota.com', salary: '$20k - $25k', location: 'Location 210-27 Quadra, Market Street, Victoria Canada', categories: ['all', 'new', 'recent'] }]
const Jobarea = () => {
    const [filter, setFilter] = useState();
    return (
        <Jobbox>
            <Container>
                <h2 className='h-class'>Recent Jobs</h2>
                <div className='div-jobarea'>
                    <button
                        className={
                            filter == null ?
                                'RecentJobsFilter active'
                                :
                                filter === 'all' ?
                                    'RecentJobsFilter active'
                                    :
                                    'RecentJobsFilter'
                        }
                        onClick={() => setFilter('all')}
                        value='all'
                    >
                        All
                    </button>
                    <button
                        className={filter === 'new' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('new')}
                        value='new' >
                        New
                    </button>
                    <button
                        className={filter === 'featured' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('featured')}
                        value='featured' >
                        Featured
                    </button>
                    <button
                        className={filter === 'recent' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('recent')}
                        value='recent' >
                        Recent
                    </button>
                    <button
                        className={filter === 'fullTime' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('fullTime')}
                        value='fullTime' >
                        Full Time
                    </button>
                    <button
                        className={filter === 'partTime' ? 'RecentJobsFilter active' : 'RecentJobsFilter'}
                        onClick={() => setFilter('partTime')}
                        value='partTime' >
                        Part Time
                    </button>
                </div>
                <JobsContainer>
                    <motion.div
                        layout
                    >
                        <AnimatePresence>
                            <Jobitem>
                                {
                                    arr.map((data) => (
                                        (filter) ?
                                            data.categories.map((category) => (
                                                <>
                                                {/* <motion.div layout  > */}

                                                    <AnimatePresence> 

                                                        {
                                                            (filter === category) ?
                                                                // <>
                                                                <div className='card-jobitem'>
                                                                    <div className='card-job'>
                                                                        <div className='card-img'>
                                                                            <img src={data.img} alt="img" width={49} height={51} />

                                                                        </div>
                                                                        <div className='job-content'>
                                                                            <h3 className='h1-class'>
                                                                                <a>{data.post}</a>
                                                                            </h3>
                                                                            <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '28px' }}>
                                                                                <li className='li-jobitem' ><a style={{ color: 'rgb(147, 230, 147)' }}>{data.url}</a></li>
                                                                                <li className='li-jobitem'><i class="fa-solid fa-sack-dollar" style={{ color: '#4cce5b' }}></i>{data.salary}</li>
                                                                                <li className='li-jobitemm' ><i class="fa-solid fa-location-dot" style={{ color: '#4cce5b' }}></i><span>{data.location}</span></li>
                                                                            </ul>
                                                                        </div>

                                                                        <div className='button-job'>
                                                                            <button className='btn-apply'>Apply</button>
                                                                            <button className='btn-time'>Full Time</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                // </>

                                                                :
                                                                <></>
                                                        }
                                                     </AnimatePresence> 
                                                  {/* </motion.div>  */}
                                                </>


                                            ))
                                            :
                                            <motion.div
                                                layout
                                            >
                                                <>
                                                    <div className='card-jobitem'>
                                                        <div className='card-job'>
                                                            <div className='card-img'>
                                                                <img src={data.img} alt="img" width={49} height={51} />

                                                            </div>
                                                            <div className='job-content'>
                                                                <h3 className='h1-class'>
                                                                    <a>{data.post}</a>
                                                                </h3>
                                                                <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '28px' }}>
                                                                    <li className='li-jobitem' ><a style={{ color: 'rgb(147, 230, 147)' }}>{data.url}</a></li>
                                                                    <li className='li-jobitem'><i class="fa-solid fa-sack-dollar" style={{ color: '#4cce5b' }}></i>{data.salary}</li>
                                                                    <li className='li-jobitemm' ><i class="fa-solid fa-location-dot" style={{ color: '#4cce5b' }}></i><span>{data.location}</span></li>
                                                                </ul>
                                                            </div>

                                                            <div className='button-job'>
                                                                <button className='btn-apply'>Apply</button>
                                                                <button className='btn-time'>Full Time</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </motion.div>
                                    ))
                                }
                            </Jobitem>
                        </AnimatePresence>
                    </motion.div>
                </JobsContainer>
            </Container>
        </Jobbox >
    )
}

export default Jobarea
