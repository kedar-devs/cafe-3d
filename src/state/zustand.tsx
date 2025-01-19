import { create } from "zustand";
import type{ OrderActionType } from "./zustand-type";
export const usePlaceOrder=create<OrderActionType>(set=>({
    placedOrder:[],
    setPlacedOrder(placedOrder) {
        set(()=>({placedOrder}))
    },
    resetPlacedOrder() {
        set({placedOrder:[]})
    },
}))