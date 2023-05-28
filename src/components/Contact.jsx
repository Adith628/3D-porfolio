import React,{useRef, useState} from 'react';
import { styled } from 'styled-components';
import emailjs from '@emailjs/browser';

import Map from './Map';


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

  @media only screen and (max-width: 768px) {
  padding:10px;
}

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
  overflow: visible;
  opacity:0.7;
`;




const Contact = () => {

  const ref = useRef();

  const [success,setSuccess] = useState(null);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ufjb53t', 'template_98xrt8e', ref.current, 'fssbnTGeK89p3NXHw')
    .then((result) => {
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name="name" />
            <Input placeholder='Email' name ="email" />
            <TextArea rows={8} placeholder='Write your message' name="message" />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. We'll get back soon :)" }
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