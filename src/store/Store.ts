import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../store/Slice';

export const store = configureStore({
    reducer: {
        expense: expenseReducer
    }
});