import React, { Component } from 'react';
import { RiDashboard2Line } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './index.css'; 

class Sidebar extends Component {
    render() {
        return (
            <div className='side-links'>
                <div>

               
                <h1 className='heading'>Board.</h1>
                <ul>
                    <li>
                        <NavLink className="navlinks" exact="true" to="/">
                            <RiDashboard2Line size={24} className='icons' />
                            <h1 className='side-links-name'>Dashboard</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlinks" to="/transactions">
                        <TbTransactionDollar size={24} className='icons' />
                            <h1 className='side-links-name'>Transactions</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlinks" to="/schedules">
                            <RiCalendarScheduleLine size={24} className='icons' />
                            <h1 className='side-links-name'>Schedules</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlinks" to="/users">
                            <FaRegCircleUser size={24} className='icons' />
                            <h1 className='side-links-name'>Users</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlinks" to="/settings">
                            <MdOutlineSettings size={24} className='icons' />
                            <h1 className='side-links-name'>Settings</h1>
                        </NavLink>
                    </li>
                </ul>
                </div>
                <div className='footer'>

                <p className='paras'>Help</p>
                <p className='paras'>Contact us</p>
                </div>
            </div>
        );
    }
}
      

export default Sidebar;
