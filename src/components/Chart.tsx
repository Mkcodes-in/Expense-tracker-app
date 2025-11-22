import { useEffect, useRef } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import type { rootState } from '@/store/store';
import { categoryColors } from '@/utils/categoryColor';
import { getCategoryTotals } from '@/utils/getCategory';

export default function ChartComponent() {
    const expense = useSelector((state: rootState) => state.expense);

    const chartRef = useRef<HTMLCanvasElement | null>(null);

    const chartInstance = useRef<Chartjs | null>(null);

    useEffect(() => {
        const ctx = chartRef.current;
        const categoryTotals = getCategoryTotals(expense);
        const lables = Object.keys(categoryTotals);
        const value = Object.values(categoryTotals);
        const colors = expense.map((itm) => categoryColors[itm.category] || '#FFFFFF')

        if (!ctx) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chartjs(ctx, {
            type: "pie",
            data: {
                labels: lables,
                datasets: [
                    {
                        label: "Spending",
                        data: value,
                        backgroundColor: colors,
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
        <div className="bg-zinc-900 rounded-lg p-6">
            <h1 className="text-center mb-4">Expense Analysis</h1>

            <div className={`${expense.length === 0 ? "h-auto" : "h-[500px]"} overflow-hidden w-full rounded-lg`}>
                {expense.length === 0 ? (
                    <div className="text-center font-semibold text-lg">
                        No Expenses for analysis
                    </div>
                ) : (
                    <canvas ref={chartRef} className="h-full w-full"></canvas>
                )}
            </div>

        </div>
    );
}
