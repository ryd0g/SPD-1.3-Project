/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav class='navbar sticky-top navbar-expand navbar-dark bg-dark'>
      <a class='navbar-brand' href='homepage.html'>
        Weather App
      </a>
      <div class='navbar-nav'>
        <div class='dropdown'>
          <a
            class='nav-link dropdown-toggle'
            data-toggle='dropdown'
            href='#'
            role='button'
            aria-haspopup='true'
            aria-expanded='true'>
            Menu
          </a>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>
              Home
            </a>
          </div>
        </div>
      </div>
      <div class='pull-right ml-auto'>
        <ul class='nav navbar-nav navbar-right'>
          <li class='nav-item navbar-right'>
            <a
              className='nav-link'
              activeClassName='nav-link-active'
              to='/signup'>
              Forecasts
            </a>
          </li>
          <li class='nav-item navbar-right'>
            <a
              className='nav-link'
              activeClassName='nav-link-active'
              to='/signup'>
              Alerts
            </a>
          </li>
          <li class='nav-item navbar-right'>
            <a
              className='nav-link'
              activeClassName='nav-link-active'
              to='/signup'>
              Historical Data
            </a>
          </li>
          <li class='nav-item navbar-right'>
            <a
              className='nav-link'
              activeClassName='nav-link-active'
              to='/signup'>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
