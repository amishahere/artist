import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>
              Portrait Artist is a professional artist who specializes in
              creating paintings or taking photographs of a person or group of
              people
            </p>
            <i className='fa fa-envelope'></i>
            <span> portraitartist@hello.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +1 (647) 646-3383</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/1.jpg' alt='' />
              <p>
                Painting portraits is a type of art in which the main focus is
                on a human subject.
              </p>
            </div>
            <div className='item'>
              <img src='../images/hero/2.jpg' alt='' />
              <p>
                You either work as an artist that sells your pieces in
                galleries, or a commissioned portrait artist that works for a
                client.
              </p>
            </div>
          </div>
          <div className='box'>
            <h3>WORLD</h3>
            <div className='item'>
              <img src='../images/hero/3.jpg' alt='' />
              <p>
                Portrait painting is one of the most popular styles in the arts
              </p>
            </div>
            <div className='item'>
              <img src='../images/hero/4.jpg' alt='' />
              <p>
                Painting portraits, in theory, allows for a more accurate
                portrayal of a person by emphasizing certain physical
                characteristics as well as potential academic or religious
                qualities.{' '}
              </p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>FEATURED</span> <label>(5)</label>
              </li>
              <li>
                <span>WORLD</span> <label>(6)</label>
              </li>
              <li>
                <span>TECHNOLOGY</span> <label>(7)</label>
              </li>
              <li>
                <span>NATURE</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© 2022 all rights reserved</p>
          <p>
            made <i className='fa fa-heart'></i> by SOFTCOPLUS
          </p>
        </div>
      </div>
    </>
  )
}
export default Footer
