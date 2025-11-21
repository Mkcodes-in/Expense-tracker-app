import type { rootState } from "@/store/store";

export const highestCategory = (state: rootState) => {
    const arr = state.expense;
    let Category = '';
    let Amt = 0;

    for (let i = 0; i < arr.length; i++) {

        if (Number(arr[i].amount) > Amt) {
            Amt = Number(arr[i].amount);
            Category = arr[i].category;
        }
    }

    const res = Category.charAt(0).toUpperCase() + Category.slice(1);
    return res;
}