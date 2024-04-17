import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const BarGraph = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && data && Array.isArray(data.labels) && Array.isArray(data.datasets)) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: data.datasets.map((dataset, index) => ({
                        label: dataset.label || 'Data',
                        data: dataset.values,
                        backgroundColor: dataset.backgroundColor || 'rgba(0, 0, 0, 0)', // No fill color
                        borderColor: dataset.borderColor || `rgba(54, 162, 235, ${index === 0 ? 1 : 0.5})`, // Different border color for each dataset
                        borderWidth: 2
                    }))
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default BarGraph;
