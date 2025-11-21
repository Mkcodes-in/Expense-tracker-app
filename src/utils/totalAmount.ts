import type { rootState } from "@/store/store";

export const totalAmount = (state: rootState) => state.expense.reduce((sum, item) => sum + Number(item.amount), 0);