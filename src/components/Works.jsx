import React, { useState } from 'react'
import { styled } from 'styled-components';
import WebDesign from './WebDesign';
import Development from './Development';
import MobileApp from './MobileApp';


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
  @media only screen and (max-width: 768px) {
}

`
const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
  height:100%;
  flex-direction:column-reverse;
}
`
const Left = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  @media only screen and (max-width: 768px) {
  padding:20px;
  height:100%;
}
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
  position: relative;
  
  &::after{
    z-index: 10;
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation : moveText 0.5s linear both;

      @keyframes moveText{
        to{
          width: 100%;

        }
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
  color:white;
  font-size:2rem;
}

`

const Right = styled.div`
  flex : 1;
  @media only screen and (max-width: 768px) {
    max-height:30vh;
}
`

const Works = () => {

  const [work,setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item)=>(
              <ListItem key = {item} text={item} onClick={()=>{setWork(item)}} >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {
          work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : <MobileApp/>
        }
        </Right>
      </Container>
    </Section>
  )
}

export default Works