import { foodItemType } from "../types";
export type OrderActionType={
    placedOrder:foodItemType[]
    setPlacedOrder:(placedOrder:foodItemType[])=>void
    resetPlacedOrder:()=>void
} 