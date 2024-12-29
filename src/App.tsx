import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Island} from './models/Tropical_island.tsx'
import { CafeMisti } from './models/Cafe-misti.tsx'
import { BeachRock } from './models/Beach_rock.tsx'
import { Boat } from './models/Boat.tsx'
import CameraControl from './camera/camera.tsx'
import Holding from './cafe-assets/holding.tsx'
import { useState } from 'react'
import Menu from './cafe-assets/menu-data/menu.tsx'

function App() {
 const [cameraPosition,setCameraPosition]=useState<[number,number,number]>([4.3,1,-1.4])
 const [cameraRotation,setCameraRotaion]=useState<[number,number,number]>([-2.24,1,2.3])
 const [cameraLookAt,setCameraLookAt]=useState<[number,number,number]>([0,0,0])
 const [cameraPlacing,setCameraPlacing]=useState<'Inside Cafe'|'Outside'|'Drinks'>('Outside')
 const [holdingPosition,setHoldingPosition]=useState<[number,number,number]>([0,2.5,-3.5])
 const [showMenu,setShowMenu]=useState<boolean>(false)
 const [baseMenuOpt,setBaseMenuOpt]=useState('indian')
 const [menuPosition,setMenuPosition]=useState<[number,number,number]>([-2.5,3,14])
 const [menuOptions,setMenuOptions]=useState<string[]>([])
 

 const handleMenu=(value:string)=>{
  setShowMenu(!showMenu)
  setBaseMenuOpt(value)
  if(value==='indian'){
    setMenuPosition([-2.5,3,14])
    setMenuOptions(['indian','mexican','italian','chinese','american','cart'])
  }else{
    setMenuPosition([-1,2.75,18])
    setMenuOptions(['beverages','coldDrinks','hotDrinks','cart'])
  }
 }

 const handleCameraChange=(topic:string)=>{
  switch(topic){
    case 'Enter':{
      setCameraPosition([-0.6,1.9,16])
      setCameraRotaion([-0.12,-0.03,-0.03])
      setCameraPlacing('Inside Cafe')
      setCameraLookAt([0,0,0])
      setHoldingPosition([-7.5,4,11])
      break
    }
    case 'Drink':{
      setCameraPosition([-1.5,2.2,17])
      setCameraRotaion([-3,0.01,3.14])
      setCameraLookAt([-1.5,2.2,18.5])
      setCameraPlacing('Drinks')
      setHoldingPosition([-0.2,2.5,18])
      break
    }
    case 'Leave':{
      setCameraPosition([4.3,1,-1.4])
      setCameraRotaion([-2.24,1,2.3])
      setCameraLookAt([0,0,0])
      setCameraPlacing('Outside')
      setHoldingPosition([0,2.5,-3.5])
    }
  }
 }
  return (
    
     <div className=' h-screen w-full'>
      <Canvas className=' h-full w-full bg-gray-400 '>
        <OrbitControls />
        <CameraControl cameraPosition={cameraPosition} cameraRotation={cameraRotation} cameraLookAt={cameraLookAt} />
        <ambientLight />
          <CafeMisti scale={0.8} position={[0,1,20]} rotation={[0,Math.PI/2,0]}  />
          <Holding handleShowTab={handleMenu} handleCameraChange={handleCameraChange} cameraPlacing={cameraPlacing} holdingPosition={holdingPosition}/>
          {showMenu && <Menu handleShowTab={handleMenu} baseOpt={baseMenuOpt as "indian" | "chinese" | "italian" | "mexican" | "american" | "cart" | "drinks"} menuPosition={menuPosition} menuOptions={menuOptions} />}
          <BeachRock scale={16} position={[4,-3,13]} rotation={[0,Math.PI/2,0]} />
          <Boat scale={1.2} position={[-10,-1,2]}/>
          <Island />
      </Canvas>
     </div>
    
  )
}

export default App
