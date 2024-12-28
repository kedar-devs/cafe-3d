import {Canvas} from '@react-three/fiber'
import {OrbitControls,PerspectiveCamera} from '@react-three/drei'
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
 const [cameraPlacing,setCameraPlacing]=useState<'Inside Cafe'|'Outside'|'Drinks'>('Outside')
 const [holdingPosition,setHoldingPosition]=useState<[number,number,number]>([0,2.5,-3.5])

 const handleCameraChange=(topic:string)=>{
  switch(topic){
    case 'Enter':{
      setCameraPosition([-0.6,1.9,16])
      setCameraRotaion([-0.12,-0.03,-0.03])
      setCameraPlacing('Inside Cafe')
      setHoldingPosition([-7.5,4,11])
    }
  }
 }
  return (
    
     <div className=' h-screen w-full'>
      <Canvas className=' h-full w-full bg-gray-400 '>
        <OrbitControls />
        <CameraControl cameraPosition={cameraPosition} cameraRotation={cameraRotation} />
        <ambientLight />
          <CafeMisti scale={0.8} position={[0,1,20]} rotation={[0,Math.PI/2,0]}  />
          <Holding handleCameraChange={handleCameraChange} cameraPlacing={cameraPlacing} holdingPosition={holdingPosition}/>
          <Menu />
          <BeachRock scale={16} position={[4,-3,13]} rotation={[0,Math.PI/2,0]} />
          <Boat scale={1.2} position={[-10,-1,2]}/>
          <Island />
      </Canvas>
     </div>
    
  )
}

export default App
