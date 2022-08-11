import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './kalkulator/css/bootstrap.min.css';

const Daftar = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleValidation = () => {
    if(!email){
      alert('Email tidak boleh kosong')
    }
  }

  const daftarUser = async (e) => {
    e.preventDefault();

    handleValidation();

    try {
      const response = await axios.post("http://localhost:5000/user/daftar", {
        email
      });
      
      setEmail("")
      alert('Berhasil daftar')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex align-items-center" style={{height: "100vh"}}>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src="/kalkulator.png" alt=""  className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="mt-3">
              <h1 className="display-3">Registrasi</h1>
              <form onSubmit={daftarUser}>
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
                      Daftar
                    </button>
                    <span className="ml-5">Sudah punya akun ?</span>
                    <Link to="/" className="btn btn-warning ml-2">
                      Login
                    </Link>
                </div>
              </form>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Daftar;
