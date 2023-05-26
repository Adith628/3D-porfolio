import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`

`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <h1>Navbar</h1>
        </Container>
    </Section>
  )
}

export default Navbar