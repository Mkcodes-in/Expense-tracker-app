import React, { useEffect, useRef } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'

export default function Chart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        chartInstance.current = new Chartjs(chartRef.current, {
            type: "bar",
            data: {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
                datasets: [
                    {
                        label: "Spending",
                        data: [300, 200, 100, 200, 399, 250],
                        backgroundColor: 'rgba(249, 109, 8, 0.936)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
            }
        });
    }, []);
    return (
        <div className='bg-zinc-900 w-full h-full p-4 rounded-lg'>
            <canvas ref={chartRef}></canvas>
        </div>
    )
}
