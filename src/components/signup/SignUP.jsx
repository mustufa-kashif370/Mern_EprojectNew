import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";

function SignUp() {
  const [userCategory, setUserCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    category: "",
    additionalInfo: "",
    eventPreferences: "",
    dietaryRequirements: "",
    organization: "",
    experience: "",
    preferredEventType: "",
    socialMedia: "",
    availability: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const renderAdditionalFields = () => {
    if (userCategory === "attendee") {
      return (
        <>
          <div>
            <label>Phone Number:</label>
            <Input
              type="tel"
              placeholder=" +923356978569"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ backgroundColor: "#F0F0F0" }}
            />
          </div>
          <div>
            <label>Location:</label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Where are you located?"
              style={{ backgroundColor: "#F0F0F0" }}
            />
          </div>
          <div>
            <label>Event Preferences:</label>
            <Input
              name="eventPreferences"
              placeholder="Topics or types of events you're interested in"
              value={formData.eventPreferences}
              onChange={handleChange}
              style={{ backgroundColor: "#F0F0F0" }}
              minLength={100}
            />
          </div>
        </>
      );
    } else if (userCategory === "host") {
      return (
        <>
          <div>
            <label>Organization Name:</label>
            <Input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              placeholder="Your organization or business"    style={{ backgroundColor: "#F0F0F0" }}
            />
          </div>
          <div>
            <label>Event Hosting Experience:</label>
            <Input
              name="experience"
              placeholder="Describe your event hosting experience"
              value={formData.experience}
              onChange={handleChange}
              required style={{ backgroundColor: "#F0F0F0" }}
            />    
          </div>
          <div>
            <label>Preferred Event Type:</label>
            <Input
              type="text"
              name="preferredEventType"
              value={formData.preferredEventType}
              onChange={handleChange}
              required
              placeholder="Type of events you are most comfortable hosting"   
               style={{ backgroundColor: "#F0F0F0" }}
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <SignUpContainer>
        <Title>Sign Up for EventSphere</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#F0F0F0" }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#F0F0F0" }}
          />
          <CategorySelect
            value={userCategory}
            onChange={(e) => setUserCategory(e.target.value)}
            required 
          >
            <option  selected  value="" >Who Are You?</option>
            <option value="attendee">Attendee</option>
            <option value="host">Host</option>
          </CategorySelect>

          {renderAdditionalFields()}

          <Button type="submit">Sign Up</Button>
        </Form>

        <AlreadyHaveAnAccount>
          Already have an account?{" "}
          <LoginToContinue>
            <Link to={"/login"}>Login</Link>
          </LoginToContinue>
        </AlreadyHaveAnAccount>
      </SignUpContainer>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 100px;
`;

const SignUpContainer = styled.div`
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
  color: #dd1047;
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
  background-color: #F0F0F0;
`;

const CategorySelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #F0F0F0;
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

const LoginToContinue = styled.a`
  font-size: 0.9rem;
  color: blue;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
