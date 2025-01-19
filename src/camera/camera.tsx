import { useFrame, useThree } from "@react-three/fiber"
import { useEffect,useRef } from "react";
import * as THREE from'three'

type cameraType={
    cameraPosition:[number,number,number]
    cameraRotation:[number,number,number]
    cameraLookAt:[number,number,number]
}

function CameraControl({cameraPosition,cameraRotation,cameraLookAt}:cameraType) {
    const {camera}=useThree()
    const targetPosRef = useRef(new THREE.Vector3(...cameraPosition));
    const targetRotRef = useRef(new THREE.Euler(...cameraRotation));
    // const targetLookAtRef=useRef(cameraLookAt)
    useEffect(()=>{
        targetPosRef.current.set(...cameraPosition);
        targetRotRef.current.set(...cameraRotation);
        // targetLookAtRef.current.set(...cameraLookAt)
    },[...cameraPosition,...cameraRotation,...cameraLookAt])
    useFrame(() => {
        camera.position.lerp(targetPosRef.current, 0.02);
        camera.lookAt(...cameraLookAt)
        // camera.lookAt(-3,3,20)

    // Smoothly interpolate rotation
        const targetQuat = new THREE.Quaternion().setFromEuler(targetRotRef.current);
        camera.quaternion.slerp(targetQuat, 0.1);

        camera.updateProjectionMatrix();
    
      });
    
      return null;
    }


export default CameraControl