

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getData } from '../redux/actions/dataAction'
import { Link } from 'react-router-dom'


const Home = () => {

    const {dataReducer} = useSelector((state) => state)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getData())
    }, [])
    
    console.log("data user", dataReducer)

  
    return (
    <div>
        <h2>Data User</h2>
        {dataReducer.data.map((item) => (
            <img src={item.avatar} alt="" />  
        ))
        }
        <br />
        
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/register">
        <button>Register</button>
        </Link>
    </div>
  )
}

export default Home
