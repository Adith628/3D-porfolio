import React, { useRef } from 'react';
import {  RenderTexture,Text,PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const textRef = useRef() ;

    useFrame(state=>{textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2})

  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach='map'>
                <PerspectiveCamera
                    makeDefault
                    position={[0,0,5]}
                />
                <color attach="background" args={["#da4ea2"]} />
                <Text ref={textRef} fontSize={1.25} color='white'>
                    Hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube