import type { Expense } from "@/types/Expense";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Expense[] = [];

const ExpenseTrack = createSlice({
    name: 'Add_Expense',
    initialState,
    reducers: {
        add_expense: (state, action) => {
            
        }, 
        remove_expense: (state, action) => {

        }
    }
});
