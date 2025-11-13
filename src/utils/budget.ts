export type Category = { id: string; name: string; color?: string };
export type Expense = { id: string; categoryId: string; amount: number; date: string; note?: string };
export type Income = { id: string; source: string; amount: number; date: string; note?: string };

export type budgetState = {
    categories: Category[], 
    expenses: Expense[], 
    income: Income[]
};