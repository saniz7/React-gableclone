import React from 'react'
import styled from 'styled-components/macro';
import './Jobarea.css'
import Banner from '../Images/banner.jpg'
const Body = styled.div`
background-image:url(${Banner});
background-repeat:no-repeat;
width:100%;
height:790px;
display: flex;
justify-content: center;
align-items: center;
`;
const Overlay =  styled.div`
background-color:#00000090;
color: white;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width:575px){
    width:100%
}
`;
const Searchbg = styled.div`

`;
const Searchbox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:70px;
width: 1270px;
background-color: white;
padding-left: 20px;
/* margin: 10px; */
color:#878ba5;
box-shadow: 0 0 0 15px  #ffffff96;
@media (max-width: 1200px){
        width: 920px;
        margin-bottom: 300px;
    }
    @media (max-width: 990px){
        width: 720px;
    }
    @media (max-width: 770px) {
        width: 540px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`;
const Jobbox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 33%;
padding: 10px;
height: 45px;
border-right: 0.5px solid #ddd;
/* height: 180px; */
`;
const Jobtitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 10px;

`;
const Jobwrap=styled.div`
display: flex;
margin: -110px 80px ;
@media (max-width:575px) {
    width: 1100px;
    display: flex;
    flex-direction: column;
    margin: auto;
}
/* background-color: #ffffffe9; */

`;
const Jobseeker=styled.div`
display:flex ;
/* justify-content: center; */
align-items: center;
background-color: #4cce5b;
width: 50%;
padding: 30px 35px;
margin: 20px;
color:white;
box-shadow: 0 0 0 15px #ffffff96;
@media (max-width:575px) {
    width: 575px;
}
`;


const Home = () => {
  return (
    <div>
    <Body>
        <Overlay>
            <div className='maindiv'>
            <div className='content-home'>
            <h1 style={{fontSize:35,fontWeight:900}}>Get Your <span  style={{ color:'#4bcc5a'}}>Preferred</span> Job</h1>
            <h5 style={{margin:'20px 0px 50px'}}>Jobs,Employment & Future Career Opportunities</h5>
            </div>
            </div>
            <Searchbg>
                <Searchbox>
                    <Jobbox>
                    <Jobtitle>Job Title<div className='icon-jobtitle'><i class="fa-solid fa-magnifying-glass" ></i></div></Jobtitle>
                    </Jobbox>
                    <Jobbox>
                    <Jobtitle>City or State<div className='icon-jobtitle'><i class="fa-solid fa-location-dot"></i></div></Jobtitle>
                    </Jobbox>
                    <Jobbox>
                    <Jobtitle>Job Category<select><option selected disabled ><div ><i class="fa-solid fa-angle-down" ></i></div> </option>
                                        <option >ICT</option>
                                        <option >Finance</option>
                                        <option >Production</option>
                                        <option >Bank</option>
                                        <option >Marketing</option></select> </Jobtitle>
                    </Jobbox>
                    <button className='btn-search'>Search</button>
                </Searchbox>
            </Searchbg>
        </Overlay>
    </Body>
    <Jobwrap>
        <Jobseeker>
        <i class="fa-solid fa-user-plus"></i>   
        <div className='Home-job'>              
        <span>Jobseeker</span>
            <h3 style={{marginTop:10}}>Looking For a Job ?</h3>
            </div> 
            <a className='a-jobseeker'>Apply Now <i class="fa-solid fa-arrow-right" id='fa-arrow'></i></a>

        </Jobseeker>
        <Jobseeker> 
        <i class="fa-solid fa-user-plus"></i>  
        <div className='Home-job'>               
            <span>Recruiter</span>
            <h3 >Are You Recruiting?</h3>
            </div> 
            <a className='a-jobseeker'>Post a Job <i class="fa-solid fa-arrow-right" id='fa-arrow'></i></a>

            </Jobseeker>
    </Jobwrap>
    </div>
  )
}

export default Home