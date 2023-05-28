import React from 'react'
import { styled } from 'styled-components';


const data = [
  "Web Design",
  "Development",
  "Mobile App",
  "Illustration",
  "Branding",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`
const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`
const List = styled.ul`
  list-style: none;
  display: flex;  
  flex-direction: column;
  gap: 1rem;
`
const ListItem = styled.li`
  font-size:3rem;
  font-weight: 600;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.5px white;
  
  ::after{
    content: "Test";

  }
`

const Right = styled.div`
  flex : 1;
`

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item)=>(
              <ListItem key = {item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
        </Right>
      </Container>
    </Section>
  )
}

export default Works