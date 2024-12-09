import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/1/ticket.svg";
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import bannervector2 from '../../assets/img/bannervector2.png'
import bannervector1 from '../../assets/img/bannervector1.png'
import Events2 from '../../assets/img/expocity.png'
import bannerbackground from '../../assets/img/bannerBG.png'
import { Link } from 'react-router-dom';
const LoginForm = () => {
  return (
    <> 
        
            <Wrapper >
             
              <LoginContainer>
                <Title>Welcome to EventSphere</Title>
                <Form>
                  <Input type="email" placeholder="Email Address" style={{ backgroundColor: '#F0F0F0 ' }} />
                  <Input type="password" placeholder="Password" style={{ backgroundColor: '#F0F0F0 ' }} />
                  <Button>LOGIN</Button>
                  <ForgotPassword>Forgot Password?</ForgotPassword>

                </Form>
              </LoginContainer>
            </Wrapper>
        
    </>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
    
`;



const LoginContainer = styled.div`
  background: white ;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const Logo = styled.img`
  
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #DD1047;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: gray;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #e7577e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 1s, border 0.3s ease;

  &:hover {
    background: white;
    border: 2px solid #e7577e;
    color: #e7577e
  }
`;


const ForgotPassword = styled.a`
  font-size: 0.9rem;
  color: #4a90e2;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
