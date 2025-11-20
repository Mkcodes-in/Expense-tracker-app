import type { rootState } from "@/store/store";

export const totalExpense = (state: rootState) => state.expense.length;
