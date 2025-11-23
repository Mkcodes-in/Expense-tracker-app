import type { Expense } from "@/types/Expense";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const storedExpenses =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("expenses") || "[]")
    : [];

const initialState: Expense[] = storedExpenses;

const ExpenseTrack = createSlice({
  name: "Add_Expense",
  initialState,
  reducers: {
    add_expense: (state, action: PayloadAction<Expense>) => {
      state.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state));
    },

    remove_expense: (state, action) => {
      const newState = state.filter((itm) => itm.id !== action.payload);
      localStorage.setItem("expenses", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { add_expense, remove_expense } = ExpenseTrack.actions;
export default ExpenseTrack.reducer;