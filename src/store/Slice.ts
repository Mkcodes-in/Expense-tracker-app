import type { Expense } from "@/types/Expense";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Expense[] = [];

const ExpenseTrack = createSlice({
    name: 'Add_Expense',
    initialState,
    reducers: {
        add_expense: (state, action: PayloadAction<Expense>) => {
            state.push(action.payload)
        }, 
        remove_expense: (state, action) => {
            return state.filter(itm => itm.id !== action.payload);
        }
    }
});

export const {add_expense, remove_expense} = ExpenseTrack.actions;
export default ExpenseTrack.reducer;