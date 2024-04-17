
import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import BarGraph from '../BarGraph';
import PieChart from '../PieChart'
import { RiInboxArchiveLine } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsersDuotone } from "react-icons/pi";

import './index.css'



class Dashboard extends Component {
    barGraphData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Line 1',
                values: [100, 200, 150, 250, 200, 300], // Example data for line 1
            },
            {
                label: 'Line 2',
                values: [200, 150, 250, 200, 300, 250], // Example data for line 2
            }
        ]
    };
    pieChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        values: [12, 19, 3, 5, 2, 3]
    };

    render() {
        return (
            <div className='dashboard-container'>
                <Sidebar />
                <div className='navbar-content-container'>
                    <Navbar />

                    <div className='cards-container'>
                        <div className='card card1'>
                            <RiInboxArchiveLine className='icons' />

                            <h1 className='card-heading'>Total Revenues</h1>
                            <p className='total-count'>$2,129,430</p>
                        </div>
                        <div className='card card2'>
                            <TbTransactionDollar className='icons' />
                            <h1 className='card-heading'>Total Transactions</h1>
                            <p className='total-count'>1,520</p>
                        </div>
                        <div className='card card3'>
                            <AiOutlineLike className='icons' />

                            <h1 className='card-heading'>Total Likes</h1>
                            <p className='total-count'>9,721</p>
                        </div>
                        <div className='card card4'>
                            <PiUsersDuotone className='icons' />
                            <h1 className='card-heading'>Total Users</h1>
                            <p className='total-count'>892</p>
                        </div>
                    </div>
                    <div className='graph-container'>
                    <BarGraph data={this.barGraphData} />

                    </div>
                    <div>
                    <PieChart data={this.pieChartData} /> 
                    </div>
                </div>

            </div>
        );
    }
}





export default Dashboard;
