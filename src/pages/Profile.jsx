import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <div>
      <section className='profile-container'>
        <div className='profile-inner'>
          <div className='profile-display'>
            <div className='profile-user-info'>
                  <div className='profile-user'>
                      <div className='profile-image-container'>
                        <img src='../women/w5.jpeg' alt=''/>
                      </div>
                        <div className='profile-name'>
                         <p> Elooo</p>
                        <p className='profile-user-constant'>User</p>
                      </div>
                  </div>
                  {/* profile location, user entrance date */}
                  <div className='profile-location-container'>
                      <div className='location-info'>
                        <div className='loction-indicator'>
                          <span><i class="fas fa-map-marker-alt"></i></span>
                          <span>From</span>
                        </div>
                        <div className='loction-proper'>
                          <span>Nigeria</span>
                        </div>
                      </div>
                      {/* joined   */}
                      <div className='location-info'>
                        <div className='loction-indicator'>
                          <span><i className='fas fa-user'></i></span>
                          <span>memeber</span>
                        </div>
                        <div className='loction-proper'>
                          <span>Jul 2020</span>
                        </div>
                      </div>
                  </div>
            </div>
            {/* section two flex */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile