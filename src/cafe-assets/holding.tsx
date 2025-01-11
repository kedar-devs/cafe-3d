import { Html } from "@react-three/drei"

type holdingType={
    handleCameraChange:(topic:string)=>void
    handleShowTab:(value:string)=>void
    cameraPlacing:'Inside Cafe'|'Outside'|'Drinks'|'Assets'|'About',
    holdingPosition:[number,number,number];
    holdingVisible:boolean;
    

}
function Holding({handleCameraChange,cameraPlacing,holdingPosition,holdingVisible,handleShowTab}:holdingType) {
    if(!holdingVisible) return null
  return (
    <Html scale={10} position={holdingPosition} className=" w-32 flex items-center justify-center flex-col" >
    <div className=" h-12 w-24 rounded-t-full bg-black bg-opacity-50 flex items-center justify-center text-white font-medium"> Menu</div>
    {cameraPlacing==='Outside'&& <div className="bg-black bg-opacity-50 rounded-lg flex flex-col gap-y-2 py-4 px-8">
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Enter')}}>Enter</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Assets')}}>Assets</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('About')}}>About Me</button>
    </div>}
    {cameraPlacing==='Inside Cafe' && <div className="bg-black bg-opacity-50 rounded-lg flex flex-col gap-y-2 py-4 px-8">
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Leave')}}>Leave</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleShowTab('indian')}}>Order Food</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Drink')}}>Drinks</button>
    </div>}
    {cameraPlacing==='Drinks' &&  <div className="bg-black bg-opacity-50 rounded-lg flex flex-col gap-y-2 py-4 px-8">
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Leave')}}>Leave</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Enter')}}>Food</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleShowTab('beverages')}}>Order Drinks</button>
    </div>}
    {cameraPlacing==='Assets' &&  <div className="bg-black bg-opacity-50 rounded-lg flex flex-col gap-y-2 py-4 px-8">
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Leave')}}>Leave</button>
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('About')}}>About Me</button>
    </div>}
    {cameraPlacing==='About' &&  <div className="bg-black bg-opacity-50 rounded-lg flex flex-col gap-y-2 py-4 px-8">
        <button className={`w-28 text-white py-2 border rounded-lg font-medium`} onClick={()=>{handleCameraChange('Leave')}}>Leave</button>
        
    </div>}
    </Html>
  )
}

export default Holding