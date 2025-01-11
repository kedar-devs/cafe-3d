import { Html,useProgress } from "@react-three/drei"
import {CirclesWithBar} from 'react-loader-spinner'
function Loader() {
    const {progress}=useProgress()
  return (
    <Html className=" w-[100vw] h-[100vh] bg-black text-white flex flex-col items-center justify-center " center>
        <label className=" text-3xl font-semibold">Loading....</label>
        <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        <p>{Math.round(progress)}%</p>
    </Html>
  )
}

export default Loader