import React from 'react';
import { styled } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80vw;
  display: flex;
  justify-content: space-between;
`

const Right = styled.div`
  flex : 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
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

const Left = styled.div`
  flex : 1;

`

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d Model */}
          <Canvas camera={{fov:25, position:[5,5,5]
          }}>
            <OrbitControls enableZoom={false}  autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[1,2,3]}/>
            <Cube/>
        </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>
              Who we are
            </Subtitle>
          </WhatWeDo>
          <Desc>
             A create group of  designers and developers with a passion for the arts.
          </Desc>
          <Button>
            See our works
          </Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
