import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import './index.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                
                    <h1>Dashboard</h1>
                    <div className='search-bell-icon'>
                        <div className='input-search'>
                            <input className='input' type='search' placeholder='search..' />
                            <CiSearch className='search'/>
                        </div>
                        <FaRegBell />
                        <img className='profile' src='https://res.cloudinary.com/ddsbhqayi/image/upload/c_thumb,w_200,g_face/v1713329888/Mask_Group_foz4hx.png' alt="profile" />
                    </div>
                
            </div>
        );
    }
}


export default Navbar;
