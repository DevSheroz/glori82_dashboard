import React, { useState, useEffect}  from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Jan', 'Feb', 'March', 'Apr', 'May'],
            datasets: [
                    {
                        label: 'Sales',
                        data: [1782, 2549, 3995, 1299, 4599],
                        borderColor: 'rgb(53,162, 235)',
                        backgroundColor: 'rgb(53,162,235, 0.4)',
                    },
            ],
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },

                title: {
                    display:true,
                    text: 'Monthly Revenue',
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        })
    }, [])

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart