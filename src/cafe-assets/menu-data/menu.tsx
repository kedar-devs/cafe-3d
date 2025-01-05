import { Html } from "@react-three/drei"
import { useEffect, useState } from "react"
import FoodCard from "./food-card";
import { allFoodItems } from "./food-option";
import { foodItemType } from "../../types";

type menuType={
  baseOpt:'indian'|'chinese'|'italian'|'mexican'|'american'|'cart'|'drinks'
  menuPosition:[number,number,number]
  menuOptions:string[],
  handleShowTab:(value:string)=>void
}
function Menu({baseOpt,menuPosition,menuOptions,handleShowTab}:menuType) {
  const [selectedOption,setSelectedOption]=useState<'indian'|'chinese'|'italian'|'mexican'|'american'|'cart'|'drinks'>('indian')
  const [loading,setLoading]=useState<boolean>(true)
  const [foodItems,setFoodItems]=useState<foodItemType[]>(allFoodItems)
  const [orderedItem,setOrderedItem]=useState<foodItemType[]>([])
  useEffect(()=>{
    setSelectedOption(baseOpt)
    setLoading(false)
    
  },[baseOpt])
  const handleOptUpdate=(value:string)=>{
    setSelectedOption(value as 'indian'|'chinese'|'italian'|'mexican'|'american'|'cart'|'drinks')
  }
  const handleIncrement=(name:string)=>{
    const id=foodItems.findIndex(item=>item.name===name)
    if(id!==undefined && id!==-1){
      setOrderedItem((prev)=>{
        const updatedOrders=[...prev]
        const foundIdx=updatedOrders.findIndex(item=>item.name===foodItems[id].name)
        if(foundIdx!==undefined &&  foundIdx!==-1){
          if(updatedOrders[foundIdx].selectedQuantity<updatedOrders[foundIdx].quantity)
          updatedOrders[foundIdx]={...updatedOrders[foundIdx],selectedQuantity:updatedOrders[foundIdx].selectedQuantity+1}
        }else{
          updatedOrders.push({...foodItems[id],selectedQuantity:foodItems[id].selectedQuantity+1})
        }
        return updatedOrders
      })
      setFoodItems((prev)=>{
        const updatedFoodOrders=[...prev]
        if(updatedFoodOrders[id].selectedQuantity<updatedFoodOrders[id].quantity)
        updatedFoodOrders[id]={...updatedFoodOrders[id],selectedQuantity:updatedFoodOrders[id].selectedQuantity+1}
        return updatedFoodOrders
      })
  }
  }
  const handleDecrement=(name:string)=>{
    const id=foodItems.findIndex(item=>item.name==name)
    if(id!==-1){
    setOrderedItem((prev)=>{
      let updatedOrders=[...prev]
      const foundIdx=updatedOrders.findIndex(item=>item.name===foodItems[id].name)
      if(foundIdx!==undefined &&  foundIdx!==-1){
        if(updatedOrders[foundIdx].selectedQuantity>0){
          updatedOrders[foundIdx]={...updatedOrders[foundIdx],selectedQuantity:updatedOrders[foundIdx].selectedQuantity-1}
        }
        else{
          updatedOrders=updatedOrders.filter(item=>item.name!==foodItems[id].name)
        }
      }
      return updatedOrders
    })
    setFoodItems((prev)=>{
      const updatedFoodOrders=[...prev]
      if(updatedFoodOrders[id].selectedQuantity>0){
        updatedFoodOrders[id]={...updatedFoodOrders[id],selectedQuantity:updatedFoodOrders[id].selectedQuantity-1}
      }
      return updatedFoodOrders
    })
  }
  }
  const splitOnCaps=(val:string)=>{
    return val.split(/(?=[A-Z])/).join(' ')
  }
  return (
    <Html className="w-[55vw] h-[75vh] bg-[#b5b3aa] px-2 py-4 rounded-lg" position={menuPosition}>

        <div className=" w-full flex font-bold text-2xl items-center justify-center text-[#2e3131]">
            Menu
        </div>
        {!loading && <div className=" grid grid-cols-5 w-full h-4/5 py-3  ">
            <div className=" col-span-1 w-full h-full border border-[#5b5a54] flex flex-col gap-y-1 items-center py-4 rounded-s-lg">
              {menuOptions.map((opt)=>(
                <div className={` text-[#5b5a54] font-semibold capitalize cursor-pointer text-lg ${selectedOption===opt?'text-blue-600 underline':''} `} onClick={()=>{handleOptUpdate(opt)}}>
                  {splitOnCaps(opt)}
                </div>
              ))}
            </div>
            <div className="col-span-4 w-full h-full border border-[#5b5a54] px-2 py-2 rounded-e-lg overflow-y-scroll scroll-container ">
              {selectedOption!=='cart'?<div className=" w-full grid grid-cols-3 gap-x-2 gap-y-2">
                {foodItems.filter(item=>item.foodType===selectedOption).map((ele,id)=>(
                  <FoodCard key={ele.name} id={id} foodItem={ele} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                ))}
              </div>:<div className=" w-full grid grid-cols-3 gap-x-2 gap-y-2">
                {orderedItem.map((ele,id)=>(
                  <FoodCard key={ele.name} id={id} foodItem={ele} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                ))}
              </div>}
              
            </div>
        </div>}
        <div className=" w-full h-1/5 flex items-center justify-center gap-x-4 mt-2">
              <button className=" bg-blue-800 text-white w-24 rounded-lg font-semibold py-2" onClick={()=>{handleShowTab('food')}}>Order</button>
              <button className=" bg-green-800 text-white w-24 rounded-lg font-semibold py-2" onClick={()=>{handleShowTab('food')}}>Back</button>
        </div>
    </Html>
  )
}

export default Menu