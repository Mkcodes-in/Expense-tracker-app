import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './Slice';

export const store = configureStore({
    reducer: {
        expense: expenseReducer
    }
});

export type rootState = ReturnType<typeof store.getState>;