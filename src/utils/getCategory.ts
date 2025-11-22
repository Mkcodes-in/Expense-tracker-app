import type { Expense } from "@/types/Expense";

export function getCategoryTotals(expense: Expense[]): Record<string, number> {
    const totals: Record<string, number> = {};

    expense.forEach(item => {
        if (!totals[item.category]) {
            totals[item.category] = 0;
        }
        totals[item.category] += item.amount;
    });

    return totals;
}
