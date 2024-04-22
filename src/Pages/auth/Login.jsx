// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//     <div className="Signup">
//             <h2>Sign In</h2>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="name"><strong>Email</strong></label>
//                     <input type="text" placeholder="Enter Email" name="name"
//                     className ="form-control"/>
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="text" placeholder="Enter Password" name="password"
//                         className="form-control" />
//                     </div>
//                     <button type="submit" className="Reg-btn"> Log in</button>
//                     <Link to='/register' className="btn-newuser">Register</Link>
//             </form>
//         </div>

//   )
// }

// export default Login






import { Link } from "react-router-dom";
import axios from "../api/axios";

 const Login = () => {

  const handleLogin = async (event) => {
    // we will grab the username and password from the form and send it to the server
    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    event.preventDefault();
    await axios.post('/login',{
      username,
      password
    }).then((response) => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
    }
    ).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="container-sm">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div className="input-group mb-3">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            username
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

      </form>
      <Link to="/register"  className='btn btn-outline-secondary btn-sm' role="button">Don't have an account?</Link>
    </div>
  );
};

export  default Login