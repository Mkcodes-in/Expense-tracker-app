import { useEffect, useRef } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import type { rootState } from '@/store/store';

export default function ChartComponent() {
    const expense = useSelector((state: rootState) => state.expense);

    const chartRef = useRef<HTMLCanvasElement | null>(null);

    const chartInstance = useRef<Chartjs | null>(null);

    useEffect(() => {
        const ctx = chartRef.current;
        const lables = expense.map((itm) => itm.date);
        const value = expense.map((itm) => itm.amount);

        if (!ctx) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chartjs(ctx, {
            type: "bar",
            data: {
                labels: lables,
                datasets: [
                    {
                        label: "Spending",
                        data: value,
                        backgroundColor: "rgba(249, 109, 8, 0.936)",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            chartInstance.current?.destroy();
        };
    }, [expense]);

    return (
        <div className="bg-zinc-900 w-full h-full p-4 rounded-lg">
            <canvas ref={chartRef}></canvas>
        </div>
    );
}
