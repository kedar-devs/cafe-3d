import { Html } from "@react-three/drei"
import { useState } from "react"
import FoodCard from "./food-card";
import { americanFood, chineseFood, indianFood, italianFood, mexicanFood } from "./food-option";
import { foodItemType } from "../../types";

function Menu() {
  const [selectedOption,setSelectedOption]=useState<'indian'|'chinese'|'italian'|'mexican'|'american'>('indian')
  const [foodItems,setFoodItems]=useState<foodItemType[]>([])
  const options=['indian','mexican','italian','chinese','american']
  const handleOptUpdate=(value:'indian'|'chinese'|'italian'|'mexican'|'american')=>{
    setSelectedOption(value)
    switch(value){
      case 'american':
        setFoodItems(americanFood)
        break
      case 'chinese':
        setFoodItems(chineseFood)
        break
      case 'indian':
        setFoodItems(indianFood)
        break
      case 'italian':
        setFoodItems(italianFood)
        break
      case 'mexican':
        setFoodItems(mexicanFood)
        break
    }
  }
  const handleIncrement=()=>{

  }
  const handleDecrement=()=>{

  }
  return (
    <Html className="w-[55vw] h-[75vh] bg-black px-2 py-4" position={[-2.5,3,14]}>
        <div className=" w-full flex items-center justify-center text-white">
            Menu
        </div>
        <div className=" grid grid-cols-5 w-full h-full py-3 ">
            <div className=" col-span-1 w-full h-full border border-white flex flex-col gap-y-1 items-center py-4">
              {options.map((opt)=>(
                <div className={` text-white font-medium capitalize cursor-pointer text-lg ${selectedOption===opt?'text-blue-600 underline':''} `} onClick={()=>{handleOptUpdate(opt)}}>
                  {opt}
                </div>
              ))}
            </div>
            <div className="col-span-4 w-full h-full border border-white px-2 py-2">
              <div className=" w-full grid grid-cols-3 gap-x-2 gap-y-2">
                {foodItems.map((ele)=>(
                  <FoodCard foodItem={ele} handleDecrement={handleIncrement} handleIncrement={handleDecrement} />
                ))}
              </div>
              
            </div>
        </div>
    </Html>
  )
}

export default Menu