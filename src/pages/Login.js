import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../redux/actions/authAction";
import "./style.css"

const Login = () =>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const {dataRegister} = useSelector((state) => state)
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
    }

    console.log();

    return(
        <div>
            <h2>Login</h2>
            <label >Email : </label>
            <input type="text" onChange={(e)=> handleEmail(e)}/>
            <br />
            <label >Password : </label>
            <input type="password" onChange={(e) => handlePassword(e)}/>
            <div>
                <Link to="/">
                <button>Back</button>
                </Link>
                <button onClick={handleSubmit}>Submit</button>
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