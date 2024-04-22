import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../api/axios";

export default function Register({ user, setUser, token, setToken }) {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function Submit(email) {
    email.preventDefault();
    try {
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: "dominic@dom.com",
          password: "password123$",
        }),
      });
      const result = await response.json();
      if (result.message === "Registration successful") {
        setUser(`${registerData.email}`);
        setToken(result.token);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {token ? (
        <h1>Logged in as {user}</h1>
      ) : (
        <div className="login">
          <h1>Register</h1>
          <form>
            {/* email */}
            <label htmlFor={"email"} className="email">
              Email address:{" "}
              <input
                onChange={(email) => {
                  setRegisterData({
                    email: email.target.value,
                    password: registerData.password,
                  });
                }}
                type={"email"}
                name={"email"}
                value={registerData.email}
              />
            </label>
            {/* password */}
            <label htmlFor={"password"} className="password">
              Password:{" "}
              <input
                onChange={(email) => {
                  setRegisterData({
                    email: registerData.email,
                    password: email.target.value,
                  });
                }}
                type={"password"}
                name={"password"}
                value={registerData.password}
              />
            </label>

            <button onClick={Submit}>Register</button>
          </form>

          <p>If you already has an account, just log in</p>
          <button onClick={() => navigate("/login")}>Log in</button>
        </div>
      )}
    </>
  );
}
