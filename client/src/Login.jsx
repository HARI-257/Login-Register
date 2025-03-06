import React from 'react'
import axios from "axios";
import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
function Login() {


  const [email,setEmail] =  useState()
  const [password,setPassword] =  useState()
  const navigate= useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .post('http://localhost:3000/login', { email, password })
  .then((result) => {console.log(result)
    if(result.data == "success"){
      navigate('/home')
    }  
  })
  .catch((err) => console.log(err));
}

  return (
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login Form</h2>
        <div className="text-center mb-5 text-dark">Made with bootstrap</div>
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                placeholder="Email Id" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <Link to="/register" className="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Login