import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
  width: 80vw; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap : 2rem;

`
const Brand = styled.div`
height: 3rem;
display:flex;
padding:1rem 2rem;
align-items : center;

`
const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

`
const ListItem = styled.li`
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Icon = styled.img`
  height: 1.5rem;
  cursor: pointer;
`
const Button = styled.button`
  width: 5rem;
  padding: 0.5rem;
  background-color: #da4ea2;;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap : 2rem;

`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
              <Brand > 3DPortFolio</Brand >
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
              </List>
            </Links>
            <Icons>
              <Icon src='./img/search.png' />
              <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar
