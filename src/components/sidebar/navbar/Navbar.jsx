import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbarContainerDiv'>
      <div className='navmenu'>
        <ul className='menulists grid'>
          <li className='listitem'>
            <a href='/' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-dashboard-monitor'></i>
                <span className='smallText'>Dashboard</span>
              </div>
            </a>
          </li>
          <li className='listitem'>
            <a href='/projects' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-blueprint'></i>
                <span className='smallText'>Projects</span>
              </div>
            </a>
          </li>
          <li className='listitem'>
            <a href='/' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-folder-tree'></i>
                <span className='smallText'>Files</span>
              </div>
            </a>
          </li>
          <li className='listitem'>
            <a href='/' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-messages'></i>
                <span className='smallText'>Messages</span>
                <div className='messagecount'>03</div>
              </div>
            </a>
          </li>
          <li className='listitem'>
            <a href='/' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-payroll-check'></i>
                <span className='smallText'>Payments</span>
              </div>
            </a>
          </li>
          <li className='listitem'>
            <a href='/' className='menulink grid'>
              <div className='menuicon'>
                <i class='fi fi-rr-newspaper'></i>
                <span className='smallText'>Reports</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
