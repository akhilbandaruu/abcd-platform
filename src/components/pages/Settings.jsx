import React from 'react';
import '../pages/internal.css';
const Settings = () => {
  return (
    <div className='settings-container'>
      <div className='overview-info'>
        <div className='overview-text'>
          <h1>Settings</h1>
        </div>
        <div className='buttons'>
          <button className='btn-nofocus'>Cancel</button>
          <button className='btn'>Save</button>
        </div>
      </div>
      <div className='content-cont'>
        <div className='navbarContainerDiv'>
          <div className='navmenu'>
            <ul className='menulists grid'>
              <li className='listitem'>
                <a href='/' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-dashboard-monitor'></i>
                    <span className='smallText'>General</span>
                  </div>
                </a>
              </li>
              <li className='listitem'>
                <a href='/projects' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-blueprint'></i>
                    <span className='smallText'>Preference</span>
                  </div>
                </a>
              </li>
              <li className='listitem'>
                <a href='/files' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-folder-tree'></i>
                    <span className='smallText'>Files</span>
                  </div>
                </a>
              </li>
              <li className='listitem'>
                <a href='/messages' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-messages'></i>
                    <span className='smallText'>Messages</span>
                    <div className='messagecount'>03</div>
                  </div>
                </a>
              </li>
              <li className='listitem'>
                <a href='/payments' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-payroll-check'></i>
                    <span className='smallText'>Payments</span>
                  </div>
                </a>
              </li>
              <li className='listitem'>
                <a href='/reports' className='menulink grid'>
                  <div className='menuicon'>
                    <i class='fi fi-rr-newspaper'></i>
                    <span className='smallText'>Reports</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='settings-content'>
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
