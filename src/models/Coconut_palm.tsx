/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/coconut_palm.glb 
*/
import { useGLTF } from '@react-three/drei'
type CoconutType={
  scale:number,
  position:[number,number,number]
}
export function Coconut({scale,position}:CoconutType) {
  const { nodes, materials } = useGLTF('/coconut_palm.glb')
  return (
    <group scale={scale} position={position} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Tree_0_Tree_0Mat_0.geometry} material={materials.Tree_0Mat} />
        <mesh geometry={nodes.Tree_1_Tree_1Mat_0.geometry} material={materials.Tree_1Mat} />
        <mesh geometry={nodes.Tree_2_Tree_2Mat_0.geometry} material={materials.Tree_2Mat} />
        <mesh geometry={nodes.Tree_3_Tree_3Mat_0.geometry} material={materials.Tree_3Mat} />
        <mesh geometry={nodes.Tree_4_Tree_4Mat_0.geometry} material={materials.Tree_4Mat} />
      </group>
    </group>
  )
}

useGLTF.preload('/coconut_palm.glb')
