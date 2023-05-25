import React from 'react';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import { styled } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
`;


function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
