import {Canvas} from '@react-three/fiber'
import {Island} from './models/Tropical_island.tsx'
import { CafeMisti } from './models/Cafe-misti.tsx'
import { BeachRock } from './models/Beach_rock.tsx'
import { Boat } from './models/Boat.tsx'
import CameraControl from './camera/camera.tsx'
import Holding from './cafe-assets/holding.tsx'
import { Suspense, useEffect, useState } from 'react'
import Menu from './cafe-assets/menu-data/menu.tsx'
import AssetCard from './asset-card/asset_card.tsx'
import About from './about-me/about.tsx'
import Loader from './loader/loader.tsx'

function App() {
 const [cameraPosition,setCameraPosition]=useState<[number,number,number]>([4.3,1,-1.4])
 const [cameraRotation,setCameraRotaion]=useState<[number,number,number]>([-2.24,1,2.3])
 const [cameraLookAt,setCameraLookAt]=useState<[number,number,number]>([0,0,0])
 const [cameraPlacing,setCameraPlacing]=useState<'Inside Cafe'|'Outside'|'Drinks'|'Assets'|'About'>('Outside')
 const [holdingPosition,setHoldingPosition]=useState<[number,number,number]>([0,1,-3.5])
 const [holdingVisible,setHoldingVisible]=useState<boolean>(true)
 const [showMenu,setShowMenu]=useState<boolean>(false)
 const [baseMenuOpt,setBaseMenuOpt]=useState('indian')
 const [menuPosition,setMenuPosition]=useState<[number,number,number]>([-2.5,3,14])
 const [menuOptions,setMenuOptions]=useState<string[]>([])
 const [isMobile,setIsMobile]=useState(false)
 

useEffect(()=>{
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 1068);
  };
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  return () => {
    window.removeEventListener('resize', checkScreenSize);
  };
}, []);

 const handleMenu=(value:string)=>{
  if(showMenu===true){
    setHoldingVisible(true)
  }else{
    setHoldingVisible(false)
  }
  setShowMenu(!showMenu)
  setBaseMenuOpt(value)
  if(value==='indian'){
    setMenuPosition([-2.5,3,14])
    setMenuOptions(['indian','mexican','italian','chinese','american','cart','orders'])
  }else{
    setMenuPosition([-0.5,2.75,18])
    setMenuOptions(['beverages','coldDrinks','hotDrinks','cart','orders'])
  }
 }

 const handleCameraChange=(topic:string)=>{
  switch(topic){
    case 'Enter':{
      setCameraPosition([-0.6,1.9,16])
      setCameraRotaion([-0.12,-0.03,-0.03])
      setCameraPlacing('Inside Cafe')
      setCameraLookAt([0,0,0])
      setHoldingPosition([-1,2,14])
      setShowMenu(false)
      break
    }
    case 'Drink':{
      setCameraPosition([-1.5,2.2,17])
      setCameraRotaion([-3,0.01,3.14])
      setCameraLookAt([-1.5,2.2,18.5])
      setCameraPlacing('Drinks')
      setHoldingPosition([-0.2,2.5,18])
      setShowMenu(false)
      break
    }
    case 'Leave':{
      setCameraPosition([4.3,1,-1.4])
      setCameraRotaion([-2.24,1,2.3])
      setCameraLookAt([0,0,0])
      setCameraPlacing('Outside')
      setHoldingPosition([0,1,-3.5])
      setShowMenu(false)
      setHoldingVisible(true)
      break
    }
    case 'Assets':{
      setCameraPosition([-8,2,16.5])
      setCameraRotaion([-0.1,-0.4,0])
      setCameraLookAt([-3,3,3])
      setCameraPlacing('Assets')
      setHoldingVisible(false)
      break
    }
    case 'About':{
      setCameraPosition([-1.2,1,7.5])
      setCameraRotaion([-0.125,-0.15,0])
      setCameraLookAt([0,2,-5])
      setHoldingPosition([-15,2,-6])
      setCameraPlacing('About')
      setHoldingVisible(false)
    }

  }
 }
  return (
    
     <div className=' h-screen w-full'>
      {!isMobile?<Canvas className=' h-full w-full bg-gray-400 '>
        <Suspense fallback={<Loader />} >
        {/* <OrbitControls /> */}
        <CameraControl cameraPosition={cameraPosition} cameraRotation={cameraRotation} cameraLookAt={cameraLookAt} />
        <ambientLight />
          <CafeMisti scale={0.8} position={[0,1,20]} rotation={[0,Math.PI/2,0]}  />
          <Holding handleShowTab={handleMenu} holdingVisible={holdingVisible} handleCameraChange={handleCameraChange} cameraPlacing={cameraPlacing} holdingPosition={holdingPosition}/>
          {showMenu && <Menu handleShowTab={handleMenu} baseOpt={baseMenuOpt as "indian" | "chinese" | "italian" | "mexican" | "american" | "cart" | "drinks"} menuPosition={menuPosition} menuOptions={menuOptions} />}
          {cameraPlacing==='Assets' && <AssetCard handleCameraChange={handleCameraChange}/>}
          {cameraPlacing==='About' && <About handleCameraChange={handleCameraChange}/>}
          <BeachRock scale={16} position={[4,-3,13]} rotation={[0,Math.PI/2,0]} />
          <Boat scale={1.2} position={[-10,-1,2]}/>
          <Island />
          </Suspense>
      </Canvas>:<div className=' h-full w-full flex flex-col items-center justify-center py-4 px-4 bg-black text-white text-base font-medium'>
        <label className=' text-3xl font-semibold'>Mission Failed Sucessfully</label>
          <div className=' h-96 w-4/5 border border-white rounded-lg py-2 px-2 overflow-y-scroll scroll-container mt-2'>
          Hey there, dear user!
            I've noticed you're using a smartphone, but unfortunately, that's not allowed here. Why, you ask? Well, my legendary laziness stopped me from making this site responsive.

            Now, I could give you false promises about fixing it someday, but let's be honest — there's a high chance it will never happen.

            So, I kindly request you to use a tablet or a laptop with a resolution of more than 1068x750 to ensure everything renders smoothly.

            I truly appreciate your time and effort. Thanks a lot, and adios!
          </div> 
        </div>}
     </div>
    
  )
}

export default App
