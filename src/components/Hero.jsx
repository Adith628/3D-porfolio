import React from 'react';
import Navbar from './Navbar';
import { styled } from 'styled-components';
import { MeshDistortMaterial, OrbitControls,Sphere } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  flex-wrap: reverse-wrap;
`
const Left = styled.div`
  flex : 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
const Title = styled.h1`
  font-size: 3.5rem;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

`
const Line = styled.img`
  height: 0.1rem;
`
const Subtitle = styled.h2`
  color : #da4ea2;
`
const Desc = styled.p`
  font-size: 1rem;
  color: lightgray;

`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 400;
  border: none;
  width: 8rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
`

const Right = styled.div`
  flex : 3;
  position: relative;
  overflow:visible;
`
const Img = styled.img`
  width: min(90vh,45vw);
  aspect-ratio: 1/1;
  object-fit:contain;
  position: absolute;
  top: 0;
  right: 0;
  left:0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform: translateY(-10%);
    }
  }

`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>
              What we Do
            </Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-created digital experiences.
          </Desc>
          <Button>
            Learn More
          </Button>
        </Left>
        <Right>
          {/* 3d Model */}
          <Canvas camera={{fov:25, position:[5,5,5]
          }}>
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={1}/>
            <directionalLight position={[1,2,3]}/>
            <Sphere args={[1,100,200]} scale={1.75} >
            <MeshDistortMaterial color='#220736' attach="material" distort={0.5} speed={2} />
            </Sphere>
        </Canvas>
          <Img src='./img/moon.png' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero