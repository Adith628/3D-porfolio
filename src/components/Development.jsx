import React from 'react';
import Mac from './Mac';
import { OrbitControls,Stage } from '@react-three/drei';

const Development = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.1}>

            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2}  />
            <Mac/>
        </Stage>
    </Canvas>
  )
}

export default Development