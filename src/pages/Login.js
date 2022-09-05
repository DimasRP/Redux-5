import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../redux/actions/authAction";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";         
import 'primeflex/primeflex.css';
// import 'primeflex/primeflex.css';
import "./style.css"

const Login = () =>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const {dataRegister} = useSelector((state) => state)
    const [loading, setLoading] = useState(false);
    console.log("Regis", dataRegister.token);
        
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log("email", email);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log("password", password);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postLogin(email, password))
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    console.log();

    return(
        <div className="login">
            <h2>Login</h2>
            <span className="p-float-label">
                <InputText id="username"  type="text" onChange={(e)=> handleEmail(e)}/>
                <label htmlFor="username">Username</label>
            </span>
            <br />
            <span className="p-float-label">
                <InputText type="password" onChange={(e) => handlePassword(e)}/>
                <label htmlFor="password">Password</label>
            </span>
            <br></br>
            <div className="buttonLogin">
                <Link to="/">
                <Button label="Back" className="p-button-secondary" />
                </Link>
                <Button label="Submit" loading={loading} onClick={handleSubmit} />
            </div>
            
            {
                !!dataRegister.tokenLogin.length && 
                <div> 
                    <h1>Selamat Berhasil Login.</h1> 
                    <p>Token Anda</p> <h2>{dataRegister.tokenLogin}</h2>
                    </div>
            }
            
        </div>
    )
}

export default Login