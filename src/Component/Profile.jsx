import React from 'react'
import './Jobarea.css'
import IMAGES2 from '../Images/Icon'
const Profile = () => {
  return (
  <div className='item-profile'>
    <div className='Naruto'>
      <div className='Container-Profile'>
        <div className='icon-profile'>
        <i class="fa-solid fa-registered"></i>
        </div>
      <span style={{ margin: '10px' , color:' white'}}>Register Your Account</span>
   </div>
   <div className='Container-Profile'>
        <div className='icon-profile'>
        <i class="fa-solid fa-upload"></i>        </div>
      <span style={{ margin: '10px' , color:' white'}}>Upload Your Resume</span>
   </div>
   <div className='Container-Profile'>
        <div className='icon-profile'>
        <i class="fa-solid fa-phone"></i>        </div>
      <span style={{ margin: '10px' , color:' white'}}>Apply for Dream Job</span>
   </div></div>
   <div className='line-profile'></div>
   <div className='line1-profile'></div>

    <div className='btn-profile'>
    <button id='btnprofile'>Create Your Profile</button>
   <button id='btnprofile'>Upload Your CV</button>
    </div>
   
  </div>  
  
   
  )
}

export default Profile