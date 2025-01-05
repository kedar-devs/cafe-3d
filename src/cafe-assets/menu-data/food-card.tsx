import { foodItemType } from "../../types"

type FoodCardType={
    foodItem:foodItemType,
    id:number;
    handleIncrement:(name:string)=>void,
    handleDecrement:(name:string)=>void
}

function FoodCard({foodItem,handleIncrement,handleDecrement}:FoodCardType) {
  return (
    <div className=" w-48 h-48 rounded-lg  px-2 py-2 col-span-1 border-2 border-[#2e3131]">
        <div className=" h-2/5 w-full justify-center items-center">
        <img src={foodItem.imgUrl} className=" w-full h-full rounded-lg aspect-square object-contain" />
        </div>
        <div className="w-full h-3/5 flex flex-col items-center justify-center gap-y-2">
            <label className=" font-semibold mt-2">{foodItem.name}</label>
            <label className=" text-green-500 font-semibold flex gap-x-1 "><img className=" w-3 h-3 text-green-500 mt-1" src='/rupee.svg' /> {foodItem.price} <span className="text-black">/-</span></label>
            {foodItem.selectedQuantity===0 && <button className=" w-24 bg-[#5b5a54] rounded-lg py-1 font-semibold text-sm text-white" onClick={()=>{handleIncrement(foodItem.name)}}>ADD</button>}
            {foodItem.selectedQuantity!==0 && <div className=" w-full h-9 flex justify-center items-center"><button className=" w-8 h-8 bg-[#5b5a54] rounded-s-lg text-white" onClick={()=>{handleDecrement(foodItem.name)}}>-</button><div className=" w-20 h-8 border border-l-0 border-r-0 flex justify-center items-center">{foodItem.selectedQuantity}</div><button className=" w-8 h-8 bg-[#5b5a54] rounded-e-lg text-white" onClick={()=>{handleIncrement(foodItem.name)}}>+</button></div>}
        </div>
    </div>
  )
}

export default FoodCard