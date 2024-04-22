import { Link } from "react-router-dom";
import axios from "../api/axios";

const Login = ({token, setToken, user, setUser}) => {
  const handleLogin = async (event) => {
    // we will grab the username and password from the form and send it to the server
    // wrap everything from here down in try/catch block

    // use either async/await OR .then syntax
    try {
      // try { fetch()} catch(er) {}
      // fetch().then().catch()
      const form = event.target;

      const email = form.email.value;
      const password = form.password.value;

      event.preventDefault();

      const {data: {token: newToken, user: newUser}} = await axios.post("/login", {
        email,
        password,
      });
      console.log(newToken, newUser)
      setToken(newToken)
      setUser(newUser)
      // also need to get the user and set the user using retrieved data
      localStorage.setItem("token", newToken);
    } catch (error) {
      console.log(error);
      setToken('')
      localStorage.setItem('token', '')
    }

    // const response = await fetch(url, options)
  };

  return (
    <div className="container-sm">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div className="input-group mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
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
      <Link
        to="/register"
        className="btn btn-outline-secondary btn-sm"
        role="button"
      >
        Don't have an account?
      </Link>
    </div>
  );
};

export default Login;
