import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && data) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Pie Chart',
                        data: data.values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)', // Red
                            'rgba(54, 162, 235, 0.6)', // Blue
                            'rgba(255, 206, 86, 0.6)', // Yellow
                            'rgba(75, 192, 192, 0.6)', // Green
                            'rgba(153, 102, 255, 0.6)', // Purple
                            'rgba(255, 159, 64, 0.6)', // Orange
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default PieChart;
