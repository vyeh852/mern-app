import { Link } from 'react-router-dom'
import { useState } from 'react';
import './index.css';

export default function Register({ history }) {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const registerHandler = async() =>{
        if(username && email && password && confirmPassword){
            if(password==confirmPassword){
                try {
                    const data = { username, email, password }
                    const config = {
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(data), // data can be `string` or {object}!
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                    }
                    let res = await fetch("http://localhost:5000/api/auth/register",config)
                    let jsonRes = await res.json();

                    localStorage.setItem("auth",jsonRes.token)
                    history.push('/')
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
    return (
        <div className="register-container">
            <span className="register-text">username:</span><input type="text" onChange={(e)=>{setUsername(e.target.value)}}/><br/>
            <span className="register-text">email:</span><input type="text" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <span className="register-text">password:</span><input type="text" onChange={(e)=>{setpassword(e.target.value)}}/><br/>
            <span className="register-text">confirm password:</span><input type="text" onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/>
            <div className="register-btn" onClick={registerHandler}>
                register
            </div>
            <span className="register-remind">
                <Link to="/login">
                    已經有帳戶了，立即登入
                </Link>
            </span>
        </div>
    )
}
