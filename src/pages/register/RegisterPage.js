import React, { useState } from 'react'
import AuthService from '../../config/AuthService';

function RegisterPage() {
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[rePassword, setrePassword] = useState("")

  const getUsername = (evt) => {
    setUsername(evt.target.value);
  }
  
  const getEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const getPassword = (evt) => {
    setPassword(evt.target.value);
  }

  const getRePassword = (evt) => {
    setrePassword(evt.target.value);
  }

  const register = async () => {
    const auth = {
      username,
      email,
      password,
    };

   const response = await fetch(AuthService.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auth),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    console.log(response);
  };

  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo text-purple-300">Social Media</h3>
        <span className="loginDesc text-white">
          Sosyal Medyada arkadaşlarınızla ve çevrenizdeki dünyayla bağlantı
          kurun.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Username" className="loginInput" onChange={getUsername}/>
          <input placeholder="Email" className="loginInput" onChange={getEmail}/>
          <input placeholder="Password" className="loginInput" onChange={getPassword}/>
          <input placeholder="Password Again" className="loginInput" onChange={getRePassword}/>
          <button className="loginButton bg-purple-800" onClick={register}>Kayıt ol</button>
          <button className="loginRegisterButton bg-lime-600">
            Hesabınla Giriş Yap
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage;