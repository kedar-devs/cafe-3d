import { Html } from "@react-three/drei"
import { useState } from "react"
import FoodCard from "./food-card";

function Menu() {
  const [selectedOption,setSelectedOption]=useState<'indian'|'chinese'|'italian'|'mexican'>('indian')
  return (
    <Html className="w-[55vw] h-[75vh] bg-black px-2 py-4" position={[-2.5,3,14]}>
        <div className=" w-full flex items-center justify-center text-white">
            Menu
        </div>
        <div className=" grid grid-cols-5 w-full h-full py-3 ">
            <div className=" col-span-1 w-full h-full border border-white">

            </div>
            <div className="col-span-4 w-full h-full border border-white px-2 py-2">
              <FoodCard />
            </div>
        </div>
    </Html>
  )
}

export default Menu