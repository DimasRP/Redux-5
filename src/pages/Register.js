import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postRegister } from '../redux/actions/authAction'
import { Link } from 'react-router-dom'

const Register = () => {
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

        dispatch(postRegister(email, password))
    }

    console.log();

  return (
    <div>
        <h2>Register</h2>
        <label htmlFor="">Email : </label>
        <input type="text" onChange={(e)=> handleEmail(e)}/>
        <br />
        <label htmlFor="">Password : </label>
        <input type="password" onChange={(e) => handlePassword(e)}/>
        
        <div>
            <Link to="/">
            <button>Back</button>
            </Link>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        {
            !!dataRegister.token.length && `Selamat Berhasil Login ${dataRegister.token}`
        }
        
    </div>
  )
}

export default Register