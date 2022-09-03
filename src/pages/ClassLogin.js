import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import { postLogin } from "../redux/actions/authAction"
import { Link } from "react-router-dom"

class ClassLogin extends Component{
    
    state = {
        email: "",
        password:""
    }
     handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

     handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

     handleSubmit = (e) => {
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.postLogin(payload)
    }
    render(){
        console.log(this.props.tokenLogin);
        return(
            <div>
                <h2>Login</h2>
                <label >Email : </label>
                <input type="text" onChange={this.handleEmail}/>
                <br />
                <label >Password : </label>
                <input type="password" onChange={this.handlePassword}/>
                <div>
                    <Link to="/">
                    <button>Back</button>
                    </Link>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                
                {/* {
                    !!dataRegister.tokenLogin.length && 
                    <div> 
                        <h1>Selamat Berhasil Login.</h1> 
                        <p>Token Anda</p> <h2>{dataRegister.tokenLogin}</h2>
                        </div>
                } */}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tokenLogin: state.dataRegister.tokenLogin
})
// const mapDicpatchToProps ={
//     postLogin
// }
export default connect(mapStateToProps, {postLogin})(ClassLogin)