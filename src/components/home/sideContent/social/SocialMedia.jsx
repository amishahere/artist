import React from 'react'

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>740 Likes</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>600 Fans</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>2,700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>270 Subscriber</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
