import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from './React_logo';
import { OrbitControls,Stage } from '@react-three/drei';


const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.1}>

            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2}  />
            <Model/>
        </Stage>
    </Canvas>
  )
}

export default WebDesign