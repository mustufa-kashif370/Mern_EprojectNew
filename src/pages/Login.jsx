import React from 'react'
import LoginForm from '../components/login/LoginForm'
import Navbar from '../components/Navbar'

function Login() {
  return (
    <>
   <div class='container' style={{marginBottom:'20px'}}>
    <div class="row">
      <div class="col-md-12">
      <Navbar/>
      </div>
    </div>
   </div>
   <div class='container' style={{marginTop:'20px'}}>
    <div class="row">
      <div class="col-md-12">
      <LoginForm/>
      </div>
    </div>
   </div>
   
    </>
  )
}

export default Login