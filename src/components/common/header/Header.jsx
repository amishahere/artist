import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul
              className={navbar ? 'navbar' : 'flex'}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to='/'>SPOTLIGHT</Link>
              </li>
              <li>
                <Link to='/culture'>PORTRAITS BY ARTIST</Link>
              </li>
              <li>
                <Link to='/politics'>PORTRAITS BY CATEGORY</Link>
              </li>
              <li>
                <Link to='/memes'>WORKS FOR SALE </Link>
              </li>
              <li>
                <Link to='/sports'>INFO</Link>
              </li>
              <li>
                <Link to='/boxed'>BOOKSTORE</Link>
              </li>
              <li>
                <Link to='/reviews'>CONTACT</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className='fa fa-times'></i>
              ) : (
                <i className='fa fa-bars'></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
