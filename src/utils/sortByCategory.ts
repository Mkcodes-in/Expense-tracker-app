import type { Expense } from "@/types/Expense";

export function CategoryByFilter(arr: Expense[], categoryName: string){
    if(categoryName === ''){
        return arr;
    }
    const sortedArr = arr.filter((item) => item.category === categoryName);
    return sortedArr;
}