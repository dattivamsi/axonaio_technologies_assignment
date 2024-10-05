import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className='header_container'>
        <p className='concept1'>Concept</p>
        <ul className='nav_items'>
            <Link  to={"/"}><li >Demos</li></Link>
            <Link to={"/about"}><li>Theme Features</li></Link>
            <Link to={"/about"}><li>Inner Pages</li></Link>
            <Link to={"/exclusiveoffers"}><li>Exclusive Offers</li></Link>
            <Link to={"/getsupport"}><li>Get Support</li></Link>
            <Link to={"/about"}><li>Open Store Free</li></Link>
            
        </ul>
        <button>Only $29</button>
    </section>
  )
}

export default Header