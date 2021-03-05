/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav class='navbar sticky-top navbar-expand'>
      <a class='navbar-brand' href='/'>
        Acclimate
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
            <a class='dropdown-item' href='/'>
              Home
            </a>
            <a class='dropdown-item' href='/forecasts'>
              Forecasts
            </a>
            <a class='dropdown-item' href='/alerts'>
              Alerts
            </a>
            <a class='dropdown-item' href='/historical-data'>
              Historical Data
            </a>
          </div>
        </div>
      </div>
      <div class='pull-right ml-auto'>
        <a className='nav-link' href='/sign-up'>
          Sign Up
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
