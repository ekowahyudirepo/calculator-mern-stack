import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './css/bootstrap.min.css';
import './css/style.css';

const Display = () => {
  const navigate = useNavigate();
  const [input1, setInput1] = useState("");
  const [operator, setOperator] = useState("");
  const [input2, setInput2] = useState("");
  const [hasil, setHasil] = useState("");
  const [bilang, setBilang] = useState("");
  const [checkTerbilang, setCheckTerbilang] = useState("terbilang d-none");
  const [login, setLogin] = useState(sessionStorage.getItem("email"));

//   const [operator, setOperator] = useState("+");
//   const navigate = useNavigate();

// hasil = 'ok'

  const input = (value) => {

    if(input1){
      if(["+","-","X","/"].includes(hasil)){
        setHasil("")
        setHasil(value)
        setInput2(value)
      }else{
        setHasil(hasil+""+value)
        setInput2(hasil+""+value)
      }
    }else{
    
      if(value === "+"){
          setInput1(hasil)
          setOperator("+")
          setHasil(value);
      }else if(value === "-"){
          setInput1(hasil)
          setOperator("-")
          setHasil(value);
      }else if(value === "X"){
          setInput1(hasil)
          setOperator("X")
          setHasil(value);
      }else if(value === "/"){
          setInput1(hasil)
          setOperator("/")
          setHasil(value);
      }else{
          if(value === ""){
            setHasil("")
          }else{
            if(value === 0){
              if(hasil.length){
                setHasil(hasil+""+value)
              }
            }else{
                setHasil(hasil+""+value)
            }
          }
      }
    }
    
  }

  const hitung = async () => {
    // e.preventDefault();
    // console.log({
    //   input1,
    //   operator,
    //   input2
    // })

    var result

    switch (operator) {
        case '+':
            result = parseFloat(input1) + parseFloat(input2)
            break;
        case '-':
            
            result = parseFloat(input1) - parseFloat(input2)
            break;
        case 'X':
            
            result = parseFloat(input1) * parseFloat(input2)
            break;
        case '/':
            
            result = parseInt(input1) / parseInt(input2)
            break;
    
        default:
            break;
    }

    setHasil(result)
    setInput1("")
    setOperator("")
    setInput2("")
    setBilang(terbilang(result))

    // console.log(res)


    // try {
    //   await axios.post("http://localhost:5000/users", {
    //     input1,
    //     input2,
    //     gender,
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/logout", {
        login
      });
      sessionStorage.setItem("email", null);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  function terbilang(a){
    var bilangan = ['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas'];

    // 1 - 11
    if(a < 12){
      var kalimat = bilangan[a];
    }
    // 12 - 19
    else if(a < 20){
      var kalimat = bilangan[a-10]+' Belas';
    }
    // 20 - 99
    else if(a < 100){
      var utama = a/10;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%10;
      var kalimat = bilangan[depan]+' Puluh '+bilangan[belakang];
    }
    // 100 - 199
    else if(a < 200){
      var kalimat = 'Seratus '+ terbilang(a - 100);
    }
    // 200 - 999
    else if(a < 1000){
      var utama = a/100;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%100;
      var kalimat = bilangan[depan] + ' Ratus '+ terbilang(belakang);
    }
    // 1,000 - 1,999
    else if(a < 2000){
      var kalimat = 'Seribu '+ terbilang(a - 1000);
    }
    // 2,000 - 9,999
    else if(a < 10000){
      var utama = a/1000;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%1000;
      var kalimat = bilangan[depan] + ' Ribu '+ terbilang(belakang);
    }
    // 10,000 - 99,999
    else if(a < 100000){
      var utama = a/100;
      var depan = parseInt(String(utama).substr(0,2));
      var belakang = a%1000;
      var kalimat = terbilang(depan) + ' Ribu '+ terbilang(belakang);
    }
    // 100,000 - 999,999
    else if(a < 1000000){
      var utama = a/1000;
      var depan = parseInt(String(utama).substr(0,3));
      var belakang = a%1000;
      var kalimat = terbilang(depan) + ' Ribu '+ terbilang(belakang);
    }
    // 1,000,000 - 	99,999,999
    else if(a < 100000000){
      var utama = a/1000000;
      var depan = parseInt(String(utama).substr(0,4));
      var belakang = a%1000000;
      var kalimat = terbilang(depan) + ' Juta '+ terbilang(belakang);
    }
    else if(a < 1000000000){
      var utama = a/1000000;
      var depan = parseInt(String(utama).substr(0,4));
      var belakang = a%1000000;
      var kalimat = terbilang(depan) + ' Juta '+ terbilang(belakang);
    }
    else if(a < 10000000000){
      var utama = a/1000000000;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%1000000000;
      var kalimat = terbilang(depan) + ' Milyar '+ terbilang(belakang);
    }
    else if(a < 100000000000){
      var utama = a/1000000000;
      var depan = parseInt(String(utama).substr(0,2));
      var belakang = a%1000000000;
      var kalimat = terbilang(depan) + ' Milyar '+ terbilang(belakang);
    }
    else if(a < 1000000000000){
      var utama = a/1000000000;
      var depan = parseInt(String(utama).substr(0,3));
      var belakang = a%1000000000;
      var kalimat = terbilang(depan) + ' Milyar '+ terbilang(belakang);
    }
    else if(a < 10000000000000){
      var utama = a/10000000000;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%10000000000;
      var kalimat = terbilang(depan) + ' Triliun '+ terbilang(belakang);
    }
    else if(a < 100000000000000){
      var utama = a/1000000000000;
      var depan = parseInt(String(utama).substr(0,2));
      var belakang = a%1000000000000;
      var kalimat = terbilang(depan) + ' Triliun '+ terbilang(belakang);
    }

    else if(a < 1000000000000000){
      var utama = a/1000000000000;
      var depan = parseInt(String(utama).substr(0,3));
      var belakang = a%1000000000000;
      var kalimat = terbilang(depan) + ' Triliun '+ terbilang(belakang);
    }

    else if(a < 10000000000000000){
      var utama = a/1000000000000000;
      var depan = parseInt(String(utama).substr(0,1));
      var belakang = a%1000000000000000;
      var kalimat = terbilang(depan) + ' Kuadriliun '+ terbilang(belakang);
    }

    var pisah = kalimat.split(' ');
    var full = [];
    for(var i=0;i<pisah.length;i++){
    if(pisah[i] != ""){full.push(pisah[i]);}
    }
    
    return full.join(' ');
}

  return (
    <div className="container">
      <div className="kalkulator row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="row">
            <div className="card bg-dark shadow">
              <div className="card-body">
                <div className="col-12 mt-4 text-white">Hai, {login} <a href="#" onClick={() => logout()}  className="text-danger float-right">Keluar</a></div>
                <div className="col-12 display-4 text-white">Calculator</div>
                <div className="col-12 mt-4">
                    <input type="text" className="form-control" value={hasil} readOnly/>
                    <small className={checkTerbilang}>{bilang}</small>
                </div>
                <div className="col-12 text-white mt-2">
                    <input type="checkbox" onClick={() => setCheckTerbilang('terbilang')} /> Terbilang
                </div>
                <div className="col-12 mb-5">
                    <div className="row mt-2">
                        <div className="col-3"><button onClick={() => input(7)} className="btn btn-primary btn-block">7</button></div>
                        <div className="col-3"><button onClick={() => input(8)} className="btn btn-primary btn-block">8</button></div>
                        <div className="col-3"><button onClick={() => input(9)} className="btn btn-primary btn-block">9</button></div>
                        <div className="col-3"><button onClick={() => input("+")} className="btn btn-success btn-block">+</button></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3"><button onClick={() => input(4)} className="btn btn-primary btn-block">4</button></div>
                        <div className="col-3"><button onClick={() => input(5)} className="btn btn-primary btn-block">5</button></div>
                        <div className="col-3"><button onClick={() => input(6)} className="btn btn-primary btn-block">6</button></div>
                        <div className="col-3"><button onClick={() => input("-")} className="btn btn-success btn-block">-</button></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3"><button onClick={() => input(1)} className="btn btn-primary btn-block">1</button></div>
                        <div className="col-3"><button onClick={() => input(2)} className="btn btn-primary btn-block">2</button></div>
                        <div className="col-3"><button onClick={() => input(3)} className="btn btn-primary btn-block">3</button></div>
                        <div className="col-3"><button onClick={() => input("/")} className="btn btn-success btn-block">/</button></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-3"><button onClick={() => input(0)} className="btn btn-primary btn-block">0</button></div>
                      <div className="col-3"><button onClick={() => input("")} className="btn btn-warning btn-block">C</button></div>
                      <div className="col-3"><button onClick={() => hitung()} className="btn btn-danger btn-block">=</button></div>
                      <div className="col-3"><button onClick={() => input("X")} className="btn btn-success btn-block">X</button></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
