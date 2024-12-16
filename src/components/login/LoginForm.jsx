import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { decode as jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import authService from "../../services/authService"

const LoginForm = () => {
  const authservice = new authService();
  const [isLogin, setIsLogin] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await authservice.login(values);
        if (response.result !== null) {
          setIsLogin(true);
          const token = localStorage.getItem("token");
          if (token) {
            setUserDetail(jwtDecode(token));
          }
          toast.success("Login successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("Login failed! Please check your credentials.");
        console.error("Login error:", error);
      }
    },
  });

  return (
    <Wrapper>
      <LoginContainer>
        <Title>Welcome to EventSphere</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Username or Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "#F0F0F0 " }}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ backgroundColor: "#F0F0F0 " }}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}

          <Button type="submit">LOGIN</Button>
          <ForgotPassword>
            <Link to={"/"}>Forgot Password?</Link>
          </ForgotPassword>
          <AlreadyHaveAnAccount>
            Don't have an account? 
            <SignUpToContinue>
              <Link to={"/signup"}>Sign Up</Link>
            </SignUpToContinue>
          </AlreadyHaveAnAccount>
        </Form>
      </LoginContainer>
    </Wrapper>
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
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 500px;
  width: 100%;
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
    color: #e7577e;
  }
`;

const ForgotPassword = styled.div`
  font-size: 0.9rem;
  color: blue;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const AlreadyHaveAnAccount = styled.h3`
  font-size: 0.9rem;
  color: blue;
  font-weight: 200;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    font-size: 0.89rem;
  }
`;

const SignUpToContinue = styled.div`
  font-size: 0.9rem;
  color: blue;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;
