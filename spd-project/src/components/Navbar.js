import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => {
    setClick(false)
    window.scroll(0,0)
  }
  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            sclptd <img src='images/logo.png' height='40px'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery'className='nav-links'onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/upload' className='nav-links-mobile' onClick={closeMobileMenu}>
                Upload
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' use='upload'> Upload </Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar

