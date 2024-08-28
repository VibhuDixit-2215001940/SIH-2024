import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#"><img src="images/das.png" alt="" />Dashboard</a></li>
        <li><a href="#"><img src="images/cate.png" alt="" />Waste Categories</a></li>
        <li><a href="#"><img src="images/sch.png" alt="" />Collection Schedule</a></li>
        <li><a href="#"><img src="images/report.png" alt="" />Reports</a></li>
        <li><a href="#"><img src="images/settings.png" alt="" />Settings</a></li>
        <li><a href="#"><img src="images/logout.png" alt="" />Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
