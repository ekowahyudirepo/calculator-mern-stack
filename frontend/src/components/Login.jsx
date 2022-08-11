import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email
      });
      if(response.data.length){
        sessionStorage.setItem("email", email);
        navigate('kalkulator')
      }else{
        alert('Email tidak tersedia')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex align-items-center" style={{height: "100vh"}}>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src="/kalkulator.png" className="img-fluid"/>
        </div>
        <div className="col-md-6">
            <div className="mt-3">
              <h1 className="display-3">Login</h1>
              <form onSubmit={loginUser}>
                <div className="form-group">
                  <label className="label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    <span className="ml-5">Belum punya akun ?</span>
                    <Link to="/daftar" className="btn btn-warning ml-2">
                      Daftar
                    </Link>
                </div>
              </form>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
