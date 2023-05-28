import React from 'react';
import { styled } from 'styled-components';
import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width : 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem
`;

const Left = styled.div`
  flex :1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width:45vw;
  max-width:400px; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding : 0.5rem;
  background-color: lightgray;
  border:none;
  border-radius: 0.25rem;
`;

const TextArea = styled.textarea`
  padding : 0.5rem;
  background-color: lightgray;
  border:none;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding : 0.5rem;
  background-color: #da4ea2;
  border:none;
  color:white;
  border-radius: 0.25rem;
`;


const Right = styled.div`
  flex: 1;
`;



const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder='Name' />
            <Input placeholder='Email' />
            <TextArea rows={8} placeholder='Write your message' />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact