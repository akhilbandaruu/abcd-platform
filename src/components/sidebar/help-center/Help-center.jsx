import React from 'react';
import './Help-center.css';
import { Link } from 'react-router-dom';

const Helpcenter = () => {
  return (
    <div className='helpcenterbox'>
      <i className='fi fi-rr-life-ring helpicon'></i>
      <h3>Need Help?</h3>
      <p>Go-to resource for any assistance.</p>
      <Link to='/support-ticket' className='btn'>
        Support Ticket
      </Link>
    </div>
  );
};

export default Helpcenter;
