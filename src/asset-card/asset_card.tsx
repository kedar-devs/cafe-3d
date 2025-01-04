import { Html } from "@react-three/drei"
import { threeDAssets } from "./threeD-assets"


function AssetCard() {
  return (
    <Html className="w-[65vw] h-[75vh] grid grid-cols-3 bg-black bg-opacity-65 px-8 py-8 rounded-lg overflow-y-scroll text-white" position={[-10,4,12]}>
        {threeDAssets.map((ele)=>(
            <div className=" w-48 h-48 rounded-lg border border-white flex flex-col py-2 justify-center items-center ">
                <div className=" h-2/5 w-full justify-center items-center rounded-lg">
                    <img src={ele.imgSrc} className=" w-full h-full  aspect-square object-contain rounded-lg" />
                </div>
                <div className="w-full h-3/5 flex flex-col items-center justify-center gap-y-2">
                <label className=" font-semibold mt-2 text-lg">{ele.name}</label>
                <a className=" text-blue-500 font-semibold flex gap-x-1 text-sm" href={ele.link} target="_blank">Link</a>
                </div>
            </div>
        ))}
    </Html>
  )
}

export default AssetCard